import 'swiper/swiper-bundle.min.css';

import { Chip, Col, Row, Text } from '../Ui';

import { styled } from '../../styles/stitches.config';
import { useRouter } from 'flareact/router';

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

export const TabsWrapper = styled('div', {
    display: 'flex',
    overflowX: 'scroll',
    '@mobile': { marginBottom: '$s3', paddingLeft: '$s1' },
    '@sd': { marginBottom: '$s4', paddingLeft: '$s1' },
    '@lg': {
        paddingLeft: '5%'
    },
    '& a + a': {
        marginLeft: '$s05',
        '@md': {
            marginLeft: '$s1'
        },
        '@sd': {
            marginLeft: '$s15'
        },
        '@lg': {
            marginLeft: '$s2'
        },
        '@xlg': {
            marginLeft: '$s25'
        }
    }
});

export const CategoriesTab = ({ currentTab }) => {
    const { query, pathname } = useRouter();
    const handleActiveChip = (category: string, route: string) => {
        if (`/${category}` === route) {
            return true;
        } else if (!category && route === '/blog') {
            return true;
        }
        return false;
    };
    return (
        <>
            <TabsWrapper>
                {categories.map(({ name, route }, index) => (
                    <Chip
                        key={index}
                        href={route !== '/blog' ? pathname : '/[lang]/blog'}
                        as={
                            route !== '/blog'
                                ? `/${query.lang}/blog${route}`
                                : `/${query.lang}/blog`
                        }
                        text={name}
                        scroll={false}
                        active={handleActiveChip(query.category, route)}
                    />
                ))}
            </TabsWrapper>
            <Row>
                <Col
                    col={{ '@lg': 18 }}
                    noGutters={{ '@lg': true }}
                    offset={{ '@lg': 1 }}
                >
                    <Text
                        as={'h4'}
                        css={{
                            '@mobile': { marginBottom: '$s1' },
                            '@sd': { marginBottom: '$s15' }
                        }}
                    >
                        {currentTab}
                    </Text>
                </Col>
            </Row>
        </>
    );
};
