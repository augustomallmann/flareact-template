import { CSS } from '@stitches/react/types/css-util';
import Link from 'flareact/link';
import { styled } from '../../styles/stitches.config';

interface ChipProps {
    text: string;
    href: string;
    as?: string;
    prefetch?: boolean;
    scroll?: boolean;
    css?: CSS;
    ref?: React.Ref<HTMLAnchorElement>;
    active?: boolean;
    animating?: boolean;
    startAnimating?: () => void;
}

const ChipStyle = styled('span', {
    display: 'inline-block',
    borderRadius: '$pill',
    padding: '$s1',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    transition: 'background-color $medium $dissolve',
    fontWeight: '$regular',
    width: 'max-content',
    variants: {
        light: {
            true: {
                border: '1px solid',
                borderColor: '$borderColorMedium',
                color: '$uiBackgroundActiveInverse',
                '&:hover': {
                    borderColor: '$uiBackgroundBaseInverse',
                    backgroundColor: '$uiBackgroundBaseInverse',
                    color: '$textColorStrongInverse'
                }
            }
        },
        isActive: {
            true: {
                backgroundColor: '$uiBackgroundBaseInverse',
                color: '$textColorStrongInverse'
            }
        }
    },
    defaultVariants: {
        light: true
    }
});

export const Chip = ({
    text,
    href,
    as,
    scroll,
    active,
    ...props
}: ChipProps) => {
    return (
        <Link href={href} as={as} scroll={scroll}>
            <a>
                <ChipStyle isActive={active} {...props}>
                    {text}
                </ChipStyle>
            </a>
        </Link>
    );
};
