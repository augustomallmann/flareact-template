import { styled } from '../../styles/stitches.config';

export const Col = styled('div', {
    position: 'relative',
    width: '100%',
    px: '$s1',
    variants: {
        col: {
            1: {
                mobileColumns: 1
            },
            2: {
                mobileColumns: 2
            },
            3: {
                mobileColumns: 3
            },
            4: {
                mobileColumns: 4
            },
            5: {
                mdDevicesColumns: 5
            },
            6: {
                mdDevicesColumns: 6
            },
            7: {
                mdDevicesColumns: 7
            },
            8: {
                mdDevicesColumns: 8
            },
            9: {
                mdDevicesColumns: 9
            },
            10: {
                mdDevicesColumns: 10
            },
            11: {
                desktopColumns: 11
            },
            12: {
                desktopColumns: 12
            },
            13: {
                desktopColumns: 13
            },
            14: {
                desktopColumns: 14
            },
            15: {
                desktopColumns: 15
            },
            16: {
                desktopColumns: 16
            },
            17: {
                desktopColumns: 17
            },
            18: {
                desktopColumns: 18
            },
            19: {
                desktopColumns: 19
            },
            20: {
                desktopColumns: 20
            }
        },
        offset: {
            0: {
                marginLeft: 0
            },
            1: {
                mobileOffset: 1
            },
            2: {
                mobileOffset: 2
            },
            3: {
                mobileOffset: 3
            },
            4: {
                mobileOffset: 4
            },
            5: {
                mdDevicesOffset: 5
            },
            6: {
                mdDevicesOffset: 6
            },
            7: {
                mdDevicesOffset: 7
            },
            8: {
                mdDevicesOffset: 8
            },
            9: {
                mdDevicesOffset: 9
            },
            10: {
                mdDevicesOffset: 10
            },
            11: {
                desktopOffset: 11
            },
            12: {
                desktopOffset: 12
            },
            13: {
                desktopOffset: 13
            },
            14: {
                desktopOffset: 14
            },
            15: {
                desktopOffset: 15
            },
            16: {
                desktopOffset: 16
            },
            17: {
                desktopOffset: 17
            },
            18: {
                desktopOffset: 18
            },
            19: {
                desktopOffset: 19
            },
            20: {
                desktopOffset: 20
            }
        },
        narrowRight: {
            true: {
                pr: '0'
            }
        },
        narrowLeft: {
            true: {
                pl: '0'
            }
        },
        noGutters: {
            true: {
                px: '0'
            }
        }
    }
});

export const Row = styled('div', {
    display: 'flex',
    flexWrap: 'wrap'
});

export const Container = styled('div', {
    // maxWidth: '1200px',
    margin: '0 auto',
    variants: {
        fluid: {
            true: {
                maxWidth: '100%'
            }
        }
    },
    defaultVariants: {
        fluid: true
    }
});
