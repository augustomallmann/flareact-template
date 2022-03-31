import { styled } from '../../styles/stitches.config';

const limitNumberOfLinesCSS = {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical'
};

export const Text = styled('p', {
    variants: {
        margin: {
            false: {
                margin: '0'
            }
        },
        small: {
            true: {
                fontSize: '$s1',
                lineHeight: '150%',
                letterSpacing: '-0.01rem',
                fontWeight: '$regular'
            }
        },
        big: {
            true: {
                fontSize: 'clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem)',
                lineHeight: '160%',
                letterSpacing: '-0.01rem',
                fontWeight: '$medium'
            }
        },
        maxLines: {
            2: {
                ...limitNumberOfLinesCSS,
                '-webkit-line-clamp': 2
            },
            3: {
                ...limitNumberOfLinesCSS,
                '-webkit-line-clamp': 3
            },
            14: {
                ...limitNumberOfLinesCSS,
                '-webkit-line-clamp': 14
            }
        }
    }
});
