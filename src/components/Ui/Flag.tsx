import { styled } from '../../styles/stitches.config';

export const Flag = styled('span', {
    display: 'inline-block',
    padding: '$s025 $s05',
    border: '1px solid transparent',
    borderRadius: '$pill',
    color: '$textColorMedium',
    '& + span': {
        marginLeft: '$s05'
    },
    variants: {
        primary: {
            true: {
                borderColor: '$primaryColorBase'
            }
        },
        medium: {
            true: {
                borderColor: '$borderColorMedium'
            }
        },
        small: {
            true: {
                fontSize: '12px'
            }
        }
    },
    defaultVariants: {
        primary: true
    }
});
