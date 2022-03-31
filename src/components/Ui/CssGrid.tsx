import { styled } from '../../styles/stitches.config';

export const CssGrid = styled('div', {
    boxSizing: 'border-box',
    display: 'grid',
    variants: {
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
            }
        },
        justify: {
            start: {
                justifyContent: 'start'
            },
            center: {
                justifyContent: 'center'
            },
            end: {
                justifyContent: 'end'
            },
            between: {
                justifyContent: 'space-between'
            }
        },
        flow: {
            row: {
                gridAutoFlow: 'row'
            },
            column: {
                gridAutoFlow: 'column'
            },
            dense: {
                gridAutoFlow: 'dense'
            },
            rowDense: {
                gridAutoFlow: 'row dense'
            },
            columnDense: {
                gridAutoFlow: 'column dense'
            }
        },
        columns: {
            1: {
                gridTemplateColumns: 'repeat(1, 1fr)'
            },
            2: {
                gridTemplateColumns: 'repeat(2, 1fr)'
            },
            3: {
                gridTemplateColumns: 'repeat(3, 1fr)'
            },
            4: {
                gridTemplateColumns: 'repeat(4, 1fr)'
            }
        },
        gap: {
            1: {
                gap: '$s1'
            },
            2: {
                gap: '$s2'
            },
            5: {
                gap: '$s5'
            }
        },
        gapX: {
            half: {
                columnGap: '$s05'
            },
            1: {
                columnGap: '$s1'
            }
        },
        gapY: {
            1: {
                rowGap: '$s1'
            },
            2: {
                rowGap: '$s2'
            },
            3: {
                rowGap: '$s3'
            }
        }
    }
});
