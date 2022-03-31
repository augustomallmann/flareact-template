import { Box } from '../../components/Ui';
import { styled } from '../../styles/stitches.config';

export const DropdownStiches = styled(Box, {
    position: 'absolute',
    display: 'none',
    top: '5.9375rem',
    zIndex: '99',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90vw',
    backgroundColor: '$uiBackgroundAlt',
    paddingLeft: '5vw',
    visibility: 'hidden',
    opacity: '0',
    transition: 'visibility 0s ease 0s, opacity .2s linear 0s',
    '&:hover': {
        visibility: 'visible',
        opacity: '1',
        display: 'block'
    }
});

type DropdownProps = {
    children: JSX.Element | JSX.Element[];
};
export const Dropdown = ({ children }: DropdownProps) => (
    <DropdownStiches>{children}</DropdownStiches>
);
