import { Box, Button, Card, Col, CssGrid, Flag, Row, Text } from './Ui';

import { FeaturedContentType } from '../types/hub';
import { Img } from './Img';
import Link from 'flareact/link';
import { Picture } from './Picture';

type FeaturedContentProps = {
    content: FeaturedContentType[];
};

export const FeaturedContent = ({ content }: FeaturedContentProps) => {
    return (
        <>
            <Row
                css={{
                    alignItems: 'stretch',
                    '@mobile': {
                        margin: '$s1 0 $s3'
                    },
                    '@sd': {
                        margin: '$s5 0 $s45'
                    }
                }}
            >
                <Col
                    css={{ minHeight: '100%' }}
                    col={{ '@sd': 4, '@lg': 8, '@xlg': 6 }}
                    offset={{ '@lg': 1 }}
                    noGutters={{ '@lg': true }}
                >
                    <Link
                        href={'/[lang]/blog/post/[slug]'}
                        as={`/en/blog/post/${content[0].slug}`}
                    >
                        <a>
                            <Picture
                                css={{
                                    '@mobile': { marginBottom: '$s2' },
                                    '@md': {
                                        height: '384px'
                                    },
                                    '@desktop': { height: '100%' }
                                }}
                            >
                                <Img
                                    src={`https://www.azion.com${content[0].featuredImage}?ims=700x700`}
                                    alt={content[0].title}
                                    title={content[0].title}
                                    css={{
                                        boxShadow: '$azionSiteShadow',
                                        objectFit: 'cover',
                                        height: '100%'
                                    }}
                                />
                            </Picture>
                        </a>
                    </Link>
                </Col>
                <Col
                    col={{ '@sd': 6, '@lg': 10, '@xlg': 12 }}
                    css={{ display: 'flex', alignItems: 'center' }}
                    noGutters={{ '@lg': true }}
                >
                    <Link
                        href={'/[lang]/blog/post/[slug]'}
                        as={`/en/blog/post/${content[0].slug}`}
                    >
                        <a>
                            <Card
                                transparent
                                css={{
                                    '@lg': {
                                        paddingLeft: '$s3'
                                    },
                                    '@xlg': {
                                        paddingLeft: '$s4'
                                    },
                                    '@slg': {
                                        paddingLeft: '$s5'
                                    }
                                }}
                            >
                                <Box
                                    css={{
                                        '@mobile': { marginBottom: '$s1' },
                                        '@desktop': { marginBottom: '$s15' }
                                    }}
                                >
                                    <Flag small>Featured</Flag>
                                    <Flag medium small>
                                        {content[0].categories[0].title}
                                    </Flag>
                                </Box>
                                <Text as="h2" maxLines="3">
                                    {content[0].title}
                                </Text>
                                <Text
                                    as="p"
                                    maxLines="3"
                                    css={{
                                        '@mobile': {
                                            marginBottom: '$s15'
                                        },
                                        '@sd': {
                                            marginBottom: '$s225'
                                        }
                                    }}
                                >
                                    {content[0].excerpt}
                                </Text>
                                <Button
                                    primary={'light'}
                                    arrow
                                    css={{
                                        '@mobile': {
                                            width: '8.5rem'
                                        },
                                        '@sd': {
                                            width: '12rem'
                                        }
                                    }}
                                >
                                    Read More
                                </Button>
                            </Card>
                        </a>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col
                    col={{ '@lg': 18 }}
                    offset={{ '@lg': 1 }}
                    noGutters={{ '@lg': true }}
                >
                    <CssGrid
                        gap={{
                            '@mobile': 2,
                            '@sd': 2,
                            '@lg': 5
                        }}
                        columns={{
                            '@sm': 1,
                            '@md': 2,
                            '@sd': 4
                        }}
                    >
                        {content
                            .slice(1)
                            .map(({ categories, title, slug }, index) => (
                                <Link
                                    key={index}
                                    href={'/[lang]/blog/post/[slug]'}
                                    as={`/en/blog/post/${slug}`}
                                >
                                    <a>
                                        <Card transparent>
                                            <Box
                                                css={{
                                                    '@sm': {
                                                        marginBottom: '$s05'
                                                    },
                                                    '@md': {
                                                        marginBottom: '$s1'
                                                    },
                                                    '@sd': {
                                                        marginBottom: '$s15'
                                                    }
                                                }}
                                            >
                                                <Flag small>
                                                    {categories[0].title}
                                                </Flag>
                                            </Box>
                                            <Text as="h5" margin={false}>
                                                {title}
                                            </Text>
                                        </Card>
                                    </a>
                                </Link>
                            ))}
                    </CssGrid>
                </Col>
            </Row>
        </>
    );
};
