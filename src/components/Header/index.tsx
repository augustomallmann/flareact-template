import { Col, Row } from '../Ui';
import { useEffect, useState } from 'react';

import Link from 'flareact/link';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { Sidebar } from './Sidebar';
import { styled } from '../../styles/stitches.config';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { useScrollListener } from '../../hooks/useScrollListener';

export const HeaderStyle = styled('header', {
    backgroundColor: '$headerColorBase',
    minHeight: '4rem',
    alignItems: 'center',
    display: 'grid',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    transition: 'all 0.2s ease-in',
    '@lg': {
        maxHeight: '6rem'
    }
});

export const Header = () => {
    const [hideHeader, setHideHeader] = useState(false);
    const scroll = useScrollListener();
    const { setHeaderStatus } = useGlobalContext();

    useEffect(() => {
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
            setHideHeader(true);
            setHeaderStatus(true);
        } else {
            setHideHeader(false);
            setHeaderStatus(false);
        }
    }, [scroll.y, scroll.lastY, hideHeader, setHeaderStatus]);

    return (
        <>
            <HeaderStyle
                style={{
                    transform: hideHeader ? 'translateY(-100%)' : null,
                    transition: 'transform 300ms ease-in-out'
                }}
            >
                <Row css={{ alignItems: 'center' }}>
                    <Col col={{ '@lg': 2, '@md': 2, '@sm': 1 }}>
                        <Link href="/">
                            <a title="Azion Technologies" className="logo">
                                <Logo />
                            </a>
                        </Link>
                    </Col>
                    <Nav />
                </Row>
            </HeaderStyle>
            <Sidebar />
        </>
    );
};
