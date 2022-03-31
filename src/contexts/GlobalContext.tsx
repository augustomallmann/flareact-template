import { ReactNode, createContext, useContext, useState } from 'react';

interface GlobalContextProviderProps {
    children: ReactNode;
    lang: string;
}

type GlobalContextData = {
    lang: string;
    headerStatus: boolean;
    setHeaderStatus: (status: boolean) => void;
    showSidebar: boolean;
    handleSetShowSidebar: (status: boolean) => void;
};

const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({
    children,
    lang
}: GlobalContextProviderProps) {
    const [headerStatus, setHeaderStatus] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    const handleSetShowSidebar = (status: boolean) => {
        if (status) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
        setShowSidebar(status);
    };

    return (
        <GlobalContext.Provider
            value={{
                lang,
                headerStatus,
                setHeaderStatus,
                showSidebar,
                handleSetShowSidebar
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
