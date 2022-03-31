import { Button, Flag } from '../Ui';

import { headerContent } from './content';
import { styled } from '../../styles/stitches.config';
import { useGlobalContext } from '../../contexts/GlobalContext';

const SidebarMenu = styled('nav', {
    position: 'fixed',
    zIndex: 998,
    background: '$white',
    top: 0,
    right: '-100%',
    transition: '350ms ease-in-out',
    overflowY: 'auto',
    display: 'flex',
    width: '100%',
    height: '100vh',
    paddingTop: '4rem',
    '@md': {
        width: '40vw'
    },
    variants: {
        open: {
            true: {
                right: '0',
                transition: '350ms'
            }
        }
    }
});

const BackdropStitches = styled('div', {
    position: 'fixed',
    zIndex: 997,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.75)'
});

const UlSidebarStitches = styled('ul', {
    listStyle: 'none',
    px: '$s1'
});

const LiSidebarStitches = styled('li', {
    '& a': {
        lineHeight: '2.875rem'
    },
    variants: {
        strong: {
            true: {
                '& a': {
                    fontWeight: '$bold',
                    color: '$textColorStrong',
                    fontSize: '1rem'
                }
            }
        },
        weak: {
            true: {
                '& a': {
                    fontSize: '0.875rem',
                    color: '$textColorMedium',
                    '&:first-of-type': {
                        margintop: '$s25'
                    },
                    '&:last-of-type': {
                        marginbottom: '$s4'
                    },
                    '& ~ span': {
                        marginLeft: '$s15',
                        lineHeight: 'initial'
                    }
                }
            }
        }
    }
});

const ButtonsContainerStitches = styled('ul', {
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    bottom: 0,
    listStyle: 'none',
    width: '100%',
    padding: '$s1',
    margin: 0,
    '& button': {
        width: '100%'
    }
});

export const Sidebar = () => {
    const { showSidebar, handleSetShowSidebar } = useGlobalContext();

    return (
        <>
            {showSidebar ? (
                <BackdropStitches
                    onClick={() => handleSetShowSidebar(!showSidebar)}
                />
            ) : null}

            <SidebarMenu open={showSidebar}>
                <UlSidebarStitches>
                    {headerContent.head.nav.map((item, index) => (
                        <LiSidebarStitches strong key={index}>
                            <a href={item.href}>{item.text}</a>
                        </LiSidebarStitches>
                    ))}
                    {headerContent.sidebar.nav_weak.map((item, index) => (
                        <LiSidebarStitches weak key={index}>
                            <a href={item.href}>{item.text}</a>
                            {item.flag ? (
                                <Flag small>{item.flag.text}</Flag>
                            ) : null}
                        </LiSidebarStitches>
                    ))}
                </UlSidebarStitches>
                <ButtonsContainerStitches>
                    {headerContent.sidebar.buttons.map((item, index) => (
                        <li key={index}>
                            <Button
                                arrow
                                primary={item.primary ? 'light' : false}
                                secondary={
                                    item.secondary ? item.secondary : false
                                }
                            >
                                {item.text}
                            </Button>
                        </li>
                    ))}
                </ButtonsContainerStitches>
            </SidebarMenu>
        </>
    );
};
