import { keyframes, styled } from '../../../styles/stitches.config';

const rotate = keyframes({
    '100%': { transform: 'rotate(360deg)' }
});

const dash = keyframes({
    '0%': { strokeDasharray: '1, 150', strokeDashoffset: '0' },
    '50%': {
        strokeDasharray: '90, 150',
        strokeDashoffset: '-35'
    },
    '100%': {
        strokeDasharray: '90, 150',
        strokeDashoffset: '-124'
    }
});

const LoadingWrapper = styled('span', {
    position: 'relative',
    zIndex: '2',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

const LoadingDotsStyle = styled('svg', {
    display: 'block',
    width: 'max(min(1vw, 1rem), 0.875rem)',
    height: 'max(min(1vw, 1rem), 0.875rem)',
    animation: `${rotate} 2s linear infinite`,
    '& circle': {
        // stroke: '$iconColorBase',
        strokeLinecap: 'round',
        animation: `${dash} 1.5s ease-in-out infinite`
    }
});

export const Spinner = () => (
    <LoadingWrapper>
        <LoadingDotsStyle viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </LoadingDotsStyle>
    </LoadingWrapper>
);
