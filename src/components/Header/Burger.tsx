import { styled } from '../../styles/stitches.config';
import { useGlobalContext } from '../../contexts/GlobalContext';

const BurgerStyle = styled('button', {
    display: 'block',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0.4rem 0 0.4rem 0.99rem',
    cursor: 'pointer',
    '@lg': {
        display: 'none'
    },
    '& span': {
        display: 'block',
        backgroundColor: '$white',
        margin: '0.375rem auto',
        transition: 'all 200ms',
        width: '1.25rem',
        height: '0.125rem'
    },
    '&:hover': {
        '& span': {
            backgroundColor: '$primaryColorBase'
        }
    },
    '&:active': {
        '& span': {
            backgroundColor: '$primaryColorBase'
        }
    },
    variants: {
        open: {
            true: {
                '& span': {
                    backgroundColor: '$primaryColorBase',
                    margin: '3px auto',
                    '&:nth-child(1)': {
                        opacity: 0
                    },
                    '&:nth-child(2)': {
                        transform: 'rotate(45deg)'
                    },
                    '&:nth-child(3)': {
                        transform: 'rotate(-45deg) translate(3px, -4px)'
                    }
                }
            }
        }
    }
});

export const Burger = () => {
    const { handleSetShowSidebar, showSidebar } = useGlobalContext();

    return (
        <BurgerStyle
            open={showSidebar}
            onClick={() => handleSetShowSidebar(!showSidebar)}
        >
            <span></span>
            <span></span>
            <span></span>
        </BurgerStyle>
    );
};
