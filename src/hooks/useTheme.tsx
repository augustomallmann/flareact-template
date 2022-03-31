import { createContext, useEffect, useState } from 'react';
import { darkTheme, theme as defaultTheme } from '../styles/stitches.config';

/*
  Thanks to Okiki for the inspo!
  https://blog.okikio.dev/psa-add-dark-mode-to-your-sites-or-at-least-let-the-browsers-do-it-for-you

  This example uses Okiki's method of combining matchMedia,
  localStorage and Stitches to allow you to toggle
  through multiple colour modes whilst also taking into account
  the user's operating system preferences.

  1. Create your theme(s) and import from `./stitches.config'
  2. Add to list of available themes (below)
  3. Wrap your app in <ColourModeProvider>
  4. Use ColourModeContext.Consumer to access the toggle function / name
*/

export const ColourModeContext = createContext(null);

type ColourMode = string;
type MediaTheme = string;
type ColourModeProviderType = [ColourMode, () => void];

type AvailableThemes = {
    [x: string]: typeof defaultTheme | typeof darkTheme;
};

const available_themes: AvailableThemes = {
    light: defaultTheme.className, // stitches' default theme
    dark: darkTheme.className
};

const saveColorMode = (newMode: ColourMode) => {
    try {
        if (typeof newMode === 'string')
            window.localStorage.setItem('color-mode', newMode);
    } catch (e) {
        console.warn(e);
    }
};

const getSavedColorModePreference = (): ColourMode => {
    try {
        const savedMode = window.localStorage.getItem('color-mode');
        if (typeof savedMode === 'string') return savedMode;
    } catch (e) {
        // When Chrome in incognito, localStorage cannot be accessed
        console.warn(e);
        return null;
    }
    return null;
};

const getMediaTheme = (): MediaTheme => {
    // If they haven't been explicitly set, let's check the media query
    const mql = matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) return mql.matches ? 'dark' : 'light';
};

const useColorMode = (): ColourModeProviderType => {
    const [colorMode, setColorMode] = useState('');
    const html = document.documentElement;

    // Set color mode in localStorage, as well as in the html tag
    const applyColorMode = (newMode: ColourMode) => {
        html.classList.remove(available_themes[colorMode]);
        html.classList.add(available_themes[newMode]);
        setColorMode(newMode);
    };

    let savedColorMode = getSavedColorModePreference();
    if (savedColorMode == null) {
        // If no localStorage exists, use the user's OS setting
        savedColorMode = getMediaTheme();
    }
    // html.setAttribute("data-color-mode", savedColorMode);
    html.classList.add(available_themes[savedColorMode]);
    // Set initial state
    useEffect(() => {
        setColorMode(savedColorMode);
    }, [savedColorMode]);

    // Listen out for if a user changes operating system mode,
    // but don't save the change in local storage.
    // The only two options here are dark or light.
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
            applyColorMode(e.matches ? 'dark' : 'light');
        });

    window
        .matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', (e) => {
            applyColorMode(e.matches ? 'light' : 'dark');
        });

    const cycleToggleMode = (): void => {
        const keys = Object.keys(available_themes);
        let index = keys.indexOf(colorMode);
        if (index === keys.length - 1) {
            index = 0;
        } else if (index >= 0) {
            index = index + 1;
        }
        const newMode = keys[index];
        applyColorMode(newMode);
        saveColorMode(newMode);
    };

    return [colorMode, cycleToggleMode];
};

type ColourModeProviderProps = {
    children: React.ReactNode;
};

const ColourModeProvider = ({ children }: ColourModeProviderProps) => {
    const [colorMode, cycleToggleMode] = useColorMode();
    return (
        <ColourModeContext.Provider
            value={{
                colorMode: colorMode,
                cycleToggleMode: cycleToggleMode
            }}
        >
            {children}
        </ColourModeContext.Provider>
    );
};

export default ColourModeProvider;
