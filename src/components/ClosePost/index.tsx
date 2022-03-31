import { CSS } from '@stitches/react/types/css-util';
import { styled } from '../../styles/stitches.config';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { useRouter } from 'flareact/router';

const ClosePostStyled = styled('button', {
    position: 'fixed',
    right: '$s15',
    display: 'flex',
    border: '$none',
    width: '48px',
    height: '48px',
    backgroundColor: '$uiBackgroundBase',
    borderRadius: '$circular',
    boxShadow: '$azionSiteShadow',
    cursor: 'pointer',
    zIndex: '1',
    transition: 'top 300ms ease-in-out',
    transform: 'translateZ(0)',
    '&:hover': {
        backgroundColor: '$uiBackgroundBaseInverse'
    }
});

const ProgressionSVG = styled('svg', {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotate(-90deg)'
});

const CircleProgressionSVG = styled('circle', {
    stroke: '$primaryColorBase',
    fill: 'none',
    strokeDasharray: '100 100',
    strokeDashoffset: 0,
    strokeLinecap: 'round',
    strokeWidth: '2px'
    // transition: 'stroke-dashoffset 0.6s ease-in-out'
});

type ClosePostProps = {
    percentage: number;
    css?: CSS;
};

export const ClosePost = ({ percentage, ...props }: ClosePostProps) => {
    const { headerStatus } = useGlobalContext();

    const router = useRouter();

    return (
        <ClosePostStyled
            onClick={() => router.push('/[lang]/blog', '/en/blog')}
            {...props}
            css={{
                '@mobile': {
                    top: `${headerStatus ? '24px' : '88px'}`
                },
                '@desktop': {
                    top: `${headerStatus ? '24px' : '119px'}`
                }
            }}
        >
            <ProgressionSVG
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 -1 34 34"
                width="48"
                height="48"
            >
                <CircleProgressionSVG
                    cx="16"
                    cy="16"
                    r="15.9155"
                    css={{
                        strokeDashoffset: `${100 - percentage}`
                    }}
                />
            </ProgressionSVG>
            <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <rect
                    x="6.58203"
                    y="4.31543"
                    width="1.97368"
                    height="7.89473"
                    rx="0.986842"
                    transform="rotate(45 6.58203 4.31543)"
                    fill="#F3652B"
                />
                <rect
                    x="5.1875"
                    y="5.71094"
                    width="1.97368"
                    height="7.89474"
                    rx="0.986842"
                    transform="rotate(-45 5.1875 5.71094)"
                    fill="#F3652B"
                />
                <rect
                    x="6.58203"
                    y="6.97803"
                    width="1.97368"
                    height="7.89473"
                    rx="0.986842"
                    transform="rotate(-135 6.58203 6.97803)"
                    fill="#F3652B"
                />
                <rect
                    x="7.97656"
                    y="5.58252"
                    width="1.97368"
                    height="7.89474"
                    rx="0.986842"
                    transform="rotate(135 7.97656 5.58252)"
                    fill="#F3652B"
                />
            </svg>
        </ClosePostStyled>
    );
};
