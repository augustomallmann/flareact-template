import { CSS, VariantProps } from '@stitches/react/types';

import { Arrow } from './Arrow';
import { Spinner } from './Spinner';
import { styled } from '../../../styles/stitches.config';

export const ButtonStyle = styled('button', {
    position: 'relative',
    display: 'inline-block',
    borderRadius: '$2',
    border: '2px solid transparent',
    padding: '14px',
    paddingRight: '$s2',
    fontSize: 'max(min(1vw, 1rem), 0.875rem)',
    lineHeight: '100%',
    fontWeight: '$medium',
    height: 'fit-content',
    cursor: 'pointer',
    transition: 'all ease 350ms',
    textAlign: 'left',
    textTransform: 'lowercase',
    '&:hover': {
        '.icon-animation-primary': {
            right: '-0.2rem',
            transition:
                'right cubic-bezier(0.23, 1.2, 0.32, 1) 1400ms, opacity cubic-bezier(0.23, 1.2, 0.32, 1) 1400ms',
            opacity: 0
        },
        '.icon-animation-secondary': {
            right: '0.6rem',
            opacity: 1,
            transition: 'all ease 350ms'
        }
    },
    variants: {
        primary: {
            light: {
                backgroundColor: '$primaryColorBase',
                color: '$textColorStrong',
                border: 'solid 2px',
                borderColor: '$primaryColorBase',
                '& i': {
                    fill: '$textColorStrong'
                },
                '&:hover': {
                    backgroundColor: '$uiBackgroundBodyInverse',
                    color: '$primaryColorBase',
                    borderColor: '$uiBackgroundBodyInverse',
                    '& i': {
                        fill: '$primaryColorBase'
                    }
                }
            },
            dark: {
                '&:hover': {
                    backgroundColor: '$uiBackgroundBase'
                }
            },
            false: {}
        },
        secondary: {
            light: {
                backgroundColor: 'transparent',
                color: '$textColorStrong',
                border: 'solid 2px',
                borderColor: '$uiBackgroundBodyInverse',
                '& i': {
                    fill: '$textColorStrong'
                },
                '&:hover': {
                    borderColor: '$primaryColorBase',
                    color: '$primaryColorBase',
                    '& i': {
                        fill: '$primaryColorBase'
                    }
                }
            },
            dark: {
                backgroundColor: 'transparent',
                color: '$white',
                border: 'solid 2px',
                borderColor: '$white',
                '& i': {
                    fill: '$white'
                },
                '&:hover': {
                    borderColor: '$primaryColorBase',
                    color: '$primaryColorBase',
                    '& i': {
                        fill: '$primaryColorBase'
                    }
                }
            },
            false: {}
        },
        tertiary: {
            light: {
                backgroundColor: 'transparent',
                color: '$textColorStrong',
                paddingLeft: '$none',
                '&:hover': {
                    color: '$primaryColorBase',
                    '.icon-animation-primary': {
                        svg: {
                            fill: '$primaryColorBase'
                        }
                    },
                    '.icon-animation-secondary': {
                        svg: {
                            fill: '$primaryColorBase'
                        }
                    }
                }
            },
            dark: {}
        },
        disabled: {
            true: {
                pointerEvents: 'none',
                cursor: 'not-allowed'
            }
        }
    },
    compoundVariants: [
        {
            primary: 'light',
            disabled: true,
            css: {
                backgroundColor: '$textColorDisable',
                color: '$textColorDisable',
                borderColor: '$borderColorDisable',
                '& i': {
                    fill: '$borderColorDisable'
                },
                '& circle': {
                    fill: 'transparent',
                    stroke: '$borderColorDisable'
                }
            }
        },
        {
            secondary: 'light',
            disabled: true,
            css: {
                borderColor: '$borderColorDisable',
                '& i': {
                    fill: '$borderColorDisable'
                },
                '& circle': {
                    fill: 'transparent',
                    stroke: '$borderColorDisable'
                }
            }
        }
    ]
});

type StitchesButtonProps = React.ComponentProps<typeof ButtonStyle>;

interface ButtonProps extends StitchesButtonProps {
    isLoading?: boolean;
    isFullWidth?: boolean;
    children: JSX.Element | JSX.Element[] | string;
    type?: 'button' | 'reset' | 'submit';
    arrow?: boolean;
    css?: CSS;
    // primary?: VariantProps<typeof ButtonStyle>;
    // secondary?: VariantProps<typeof ButtonStyle>;
    // tertiary?: VariantProps<typeof ButtonStyle>;
    as?: string;
    disabled?: boolean;
    // onClick?: (e: MouseEvent) => void;
}
export const Button = ({
    children,
    isLoading = false,
    ...props
}: ButtonProps) => {
    return (
        <ButtonStyle disabled={isLoading} {...props}>
            <>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {children}
                        <Arrow />
                    </>
                )}
            </>
        </ButtonStyle>
    );
};
