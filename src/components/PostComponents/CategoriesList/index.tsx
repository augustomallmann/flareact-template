import { Box, Chip, Label } from '../../Ui';
import { ForwardRefRenderFunction, forwardRef } from 'react';

import { CSS } from '@stitches/react';
import { useRouter } from 'flareact/router';

type CategoriesListProps = {
    css?: CSS;
    gridArea?: string;
    ref?: React.Ref<HTMLDivElement>;
};

const categories = [
    {
        name: 'Newest',
        route: '/blog'
    },
    {
        name: 'Serverless',
        route: '/serverless'
    },
    {
        name: 'Caching',
        route: '/caching'
    },
    {
        name: 'Security',
        route: '/security'
    },
    {
        name: 'Routing',
        route: '/routing'
    },
    {
        name: 'Orchestration',

        route: '/orchestration'
    },
    {
        name: 'Observability',
        route: '/observability'
    },
    {
        name: 'Market Trends',
        route: '/market-trends'
    },
    {
        name: 'Company News',
        route: '/company-news'
    },
    {
        name: 'Developers',
        route: '/developers'
    }
];

const CategoriesListBase: ForwardRefRenderFunction<
    HTMLInputElement,
    CategoriesListProps
> = ({ css, gridArea, ref }) => {
    const { query } = useRouter();

    return (
        <div ref={ref} style={{ gridArea: `${gridArea}` }}>
            <Box
                css={{
                    marginBottom: '$s3',

                    ...css
                }}
            >
                <Label
                    css={{
                        marginBottom: '$s15',
                        '@desktop': { marginBottom: '$s25' }
                    }}
                >
                    Categories
                </Label>
                <Box
                    flex
                    css={{
                        '@mobile': {
                            overflow: 'scroll',
                            gap: '$s05',
                            margin: '0 -1rem',
                            padding: '0 1rem'
                        },
                        '@desktop': {
                            margin: '-1rem 0 0 -1rem',
                            width: 'calc(100% + 1rem)',
                            flexWrap: 'wrap',
                            '> *': {
                                margin: '1rem 0 0 1rem'
                            }
                        }
                    }}
                >
                    {categories.map(({ name, route }, index) => (
                        <Chip
                            key={index}
                            text={name}
                            href={'/[lang]/blog/[category]'}
                            as={`/${query.lang}/blog${route}`}
                        />
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export const CategoriesList = forwardRef(CategoriesListBase);
