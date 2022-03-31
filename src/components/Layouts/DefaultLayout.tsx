import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode | ReactNode[];
};

export const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};
