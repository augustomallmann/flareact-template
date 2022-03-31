import { styled } from '../../styles/stitches.config';

export const Box = styled('div', {
    variants: {
        position: {
            relative: {
                position: 'relative'
            },
            absolute: {
                position: 'absolute'
            }
        },
        flex: {
            true: {
                display: 'flex'
            }
        },
        align: {
            start: {
                alignItems: 'start'
            },
            center: {
                alignItems: 'center'
            },
            end: {
                alignItems: 'end'
            },
            stretch: {
                alignItems: 'stretch'
            },
            baseline: {
                alignItems: 'baseline'
            },
            inherit: {
                alignItems: 'inherit'
            },
            initial: {
                alignItems: 'initial'
            }
        },
        justify: {
            start: {
                justifyContent: 'start'
            },
            left: {
                justifyContent: 'left'
            },
            right: {
                justifyContent: 'right'
            },
            flexEnd: {
                justifyContent: 'flex-end'
            },
            flexStart: {
                justifyContent: 'flex-start'
            },
            center: {
                justifyContent: 'center'
            },
            end: {
                justifyContent: 'end'
            },
            between: {
                justifyContent: 'space-between'
            },
            around: {
                justifyContent: 'space-around'
            },
            evenly: {
                justifyContent: 'space-evenly'
            },
            inherit: {
                justifyContent: 'inherit'
            },
            initial: {
                justifyContent: 'initial'
            },
            unset: {
                justifyContent: 'unset'
            }
        },
        wrap: {
            true: {
                flexWrap: 'wrap'
            },
            initial: {
                flexWrap: 'initial'
            },
            unset: {
                flexWrap: 'unset'
            },
            nowrap: {
                flexWrap: 'nowrap'
            }
        }
    }
});
