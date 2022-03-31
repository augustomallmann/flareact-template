import { CSS } from '@stitches/react/types/css-util';
import { styled } from '../../styles/stitches.config';

interface LabelProps {
    children: string;
    css?: CSS;
    small?: boolean;
}

const LabelStyle = styled('span', {
    display: 'inline-block',
    fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 1rem)',
    lineHeight: '1.5',
    color: '$primaryColorBase',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    variants: {
        small: {
            true: {
                fontSize: '0.75rem'
            }
        }
    }
});

export const Label = ({ children, ...rest }: LabelProps) => {
    return <LabelStyle {...rest}>{children}</LabelStyle>;
};
