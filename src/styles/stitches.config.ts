import { createStitches, createTheme } from '@stitches/react';

import { DarkThemeColors } from './themes/DarkTheme';
import { LightThemeColors } from './themes/LightTheme';
import { normalize } from './base/normalize';
import { styleReset } from './base/styleReset';
import { typography } from './base/typography';

export const { styled, getCssText, globalCss, theme, keyframes } =
    createStitches({
        theme: {
            fonts: {
                fontFamily: '"Roboto", sans-serif'
            },
            fontWeights: {
                thin: 100,
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700,
                black: 900
            },
            colors: {
                /* ORANGE */
                orange900: 'hsl(17, 69%, 10%)',
                orange800: 'hsl(17, 69%, 20%)',
                orange700: 'hsl(25, 100%, 30%)',
                orange600: 'hsl(17, 71%, 50%)',
                orange500: 'hsl(17, 89%, 56%)',
                orange400: 'hsl(17, 89%, 60%)',
                orange300: 'hsl(18, 90%, 70%)',
                orange200: 'hsl(18, 90%, 80%)',
                orange100: 'hsl(17, 88%, 90%)',
                orange50: 'hsl(16, 92%, 95%)',

                /* BLUE */
                blue900: 'hsl(235, 88%, 10%)',
                blue800: 'hsl(233, 90%, 20%)',
                blue700: 'hsl(234, 90%, 30%)',
                blue600: 'hsl(234, 89%, 40%)',
                blue500: 'hsl(234, 90%, 51%)',
                blue400: 'hsl(234, 89%, 60%)',
                blue300: 'hsl(234, 90%, 70%)',
                blue200: 'hsl(233, 90%, 80%)',
                blue100: 'hsl(235, 88%, 90%)',
                blue50: 'hsl(235, 85%, 95%)',

                /* GREY */
                grey950: 'hsl(0, 0%, 5%)',
                grey900: 'hsl(0, 0%, 12%)',
                grey800: 'hsl(0, 0%, 20%)',
                grey700: 'hsl(0, 0%, 30%)',
                grey600: 'hsl(0, 0%, 40%)',
                grey500: 'hsl(0, 0%, 50%)',
                grey400: 'hsl(0, 0%, 60%)',
                grey300: 'hsl(0, 0%, 70%)',
                grey200: 'hsl(0, 0%, 80%)',
                grey100: 'hsl(0, 0%, 90%)',
                grey75: 'hsl(0, 0%, 96%)',
                grey50: 'hsl(0, 0%, 98%)',

                /* RED */
                red900: ' hsl(0, 61%, 13%)',
                red800: ' hsl(0, 59%, 23%)',
                red700: ' hsl(0, 60%, 33%)',
                red600: ' hsl(0, 60%, 43%)',
                red500: ' hsl(0, 77%, 53%)',
                red400: 'hsl(0, 100%, 63%)',
                red300: 'hsl(0, 100%, 70%)',
                red200: 'hsl(0, 100%, 80%)',
                red100: 'hsl(0, 100%, 90%)',
                red50: 'hsl(0, 100%, 95%)',

                /* YELLOW */
                yellow900: 'hsl(45, 82%, 13%)',
                yellow800: 'hsl(45, 88%, 23%)',
                yellow700: 'hsl(44, 87%, 33%)',
                yellow600: 'hsl(44, 87%, 43%)',
                yellow500: 'hsl(45, 99%, 53%)',
                yellow400: 'hsl(45, 99%, 60%)',
                yellow300: 'hsl(45, 99%, 70%)',
                yellow200: 'hsl(45, 100%, 80%)',
                yellow100: 'hsl(45, 100%, 90%)',
                yellow50: 'hsl(43, 100%, 95%)',

                /* GREEN */
                green900: 'hsl(86, 45%, 10%)',
                green800: 'hsl(87, 45%, 20%)',
                green700: 'hsl(87, 45%, 30%)',
                green600: 'hsl(87, 45%, 40%)',
                green500: 'hsl(87, 50%, 52%)',
                green400: 'hsl(87, 50%, 60%)',
                green300: 'hsl(87, 50%, 70%)',
                green200: 'hsl(88, 49%, 80%)',
                green100: 'hsl(86, 49%, 90%)',
                green50: 'hsl(88, 52%, 95%)',

                /* BLACK AND WHITE */
                black: 'hsl(0, 0%, 0%)',
                white: 'hsl(0, 0%, 100%)',

                /* LIGHT THEME BELOW */
                ...LightThemeColors
            },
            radii: {
                none: '0px',
                2: '2px',
                4: '4px',
                8: '8px',
                16: '16px',
                24: '24px',
                circular: '50%',
                pill: '500px'
            },
            borderWidths: {
                none: '0px',
                0.5: '0.5px',
                1: '1px',
                2: '2px',
                4: '4px',
                8: '8px'
            },
            borderStyles: {
                solid: 'solid',
                dashed: 'dashed',
                dotted: 'dotted'
            },
            sizes: {
                1: '8px',
                2: '16px',
                3: '24px',
                4: '32px',
                5: '48px',
                6: '64px',
                7: '80px',
                8: '96px'
            },
            space: {
                s025: '4px',
                s05: '8px',
                s075: '12px',
                s1: '16px',
                s15: '24px',
                s2: '32px',
                s225: '36px',
                s25: '40px',
                s3: '48px',
                s35: '56px',
                s4: '64px',
                s45: '72px',
                s5: '80px',
                s6: '96px'
            },
            shadows: {
                0: '0 0 4px 0px',
                1: '0 4px 8px',
                2: '0 8px 24px',
                3: '0 16px 32px',
                4: '0 16px 48px',
                azionSiteShadow:
                    '0px 139.112px 111.289px rgb(0 0 0 / 7%), 0px 58.1175px 46.494px rgb(0 0 0 / 5%), 0px 31.0724px 24.858px rgb(0 0 0 / 4%), 0px 17.4189px 13.9352px rgb(0 0 0 / 4%), 0px 9.25107px 7.40086px rgb(0 0 0 / 3%), 0px 3.84958px 3.07966px rgb(0 0 0 / 2%)'
            },
            opacity: {
                hidden: '0',
                light: '0.08',
                medium: '0.32',
                intense: '0.64',
                semiopaque: '0.8',
                none: '1'
            },
            animations: {
                dissolve: 'ease',
                slow: '300ms',
                medium: '225ms',
                high: '150ms',
                90: '90deg',
                180: '180deg',
                360: '360deg'
            }
        },
        media: {
            /* default breakpoints */
            sm: '(max-width: 639px)',
            md: '(min-width: 640px)',
            sd: '(min-width: 960px)',
            lg: '(min-width: 1280px)',
            xlg: '(min-width: 1440px)',
            slg: '(min-width: 1600px)',
            max: '(min-width: 1920px)',

            /* device breakpoints */
            mobile: '(max-width: 959px)',
            desktop: '(min-width: 960px)'
        },
        utils: {
            pr: (value: string) => ({
                paddingRight: value
            }),
            pl: (value: string) => ({
                paddingLeft: value
            }),
            pY: (value: string) => ({
                paddingTop: value,
                paddingBottom: value
            }),
            px: (value: string) => ({
                paddingLeft: value,
                paddingRight: value
            }),
            mobileColumns: (value: number) => ({
                '@sm': {
                    flex: `0 0 ${value * 25}%`,
                    maxWidth: `${value * 25}%`
                },
                '@md': {
                    flex: `0 0 ${value * 10}%`,
                    maxWidth: `${value * 10}%`
                },
                '@lg': { flex: `0 0 ${value * 5}%`, maxWidth: `${value * 5}%` }
            }),
            mdDevicesColumns: (value: number) => ({
                '@md': {
                    flex: `0 0 ${value * 10}%`,
                    maxWidth: `${value * 10}%`
                },
                '@lg': { flex: `0 0 ${value * 5}%`, maxWidth: `${value * 5}%` }
            }),
            desktopColumns: (value: number) => ({
                flex: `0 0 ${value * 5}%`,
                maxWidth: `${value * 5}%`
            }),
            mobileOffset: (value: number) => ({
                '@sm': { marginLeft: `${value * 25}%` },
                '@md': { marginLeft: `${value * 10}%` },
                '@lg': { marginLeft: `${value * 5}%` }
            }),
            mdDevicesOffset: (value: number) => ({
                '@md': { marginLeft: `${value * 10}%` },
                '@lg': { marginLeft: `${value * 5}%` }
            }),
            desktopOffset: (value: number) => ({
                marginLeft: `${value * 5}%`
            })
        }
    });

export const darkTheme = createTheme({
    colors: {
        ...DarkThemeColors
    }
});

export const globalStyle = globalCss({
    ...normalize,
    /* CSS reset */
    ...styleReset,
    ...typography
});
