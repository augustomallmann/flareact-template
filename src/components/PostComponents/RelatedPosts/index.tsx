import {
    Box,
    Button,
    Card,
    CardBody,
    CardImage,
    CssGrid,
    Flag,
    Label,
    Text
} from '../../Ui';

import { CSS } from '@stitches/react';
import Link from 'flareact/link';
import { PostCardType } from '../../../types/post';

type RelatedPostsProps = {
    css?: CSS;
    related: PostCardType[];
};

export const RelatedPosts = ({ related, css }: RelatedPostsProps) => {
    return (
        <Box
            css={{
                marginBottom: '$s35',
                '@desktop': {
                    marginBottom: '$s3'
                },
                ...css
            }}
        >
            <Label
                css={{
                    marginBottom: '$s15',
                    '@desktop': { marginBottom: '$s25' }
                }}
            >
                Related posts
            </Label>
            <CssGrid
                gapX={'1'}
                gapY={'2'}
                flow={{
                    '@mobile': 'column',
                    '@desktop': 'row'
                }}
                columns={{
                    '@desktop': 1
                }}
                css={{
                    '@mobile': {
                        overflow: 'scroll',

                        margin: '0 -$s1',
                        padding: '0 $s1'
                    }
                }}
            >
                {related.map(
                    (
                        { title, excerpt, category, featuredImage, slug },
                        index
                    ) => (
                        <Card
                            postGrid
                            key={index}
                            css={{
                                borderRadius: 4,
                                '@desktop': {
                                    background: 'transparent'
                                },
                                '&:hover': {
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            {featuredImage && window.innerWidth < 960 && (
                                <CardImage src={featuredImage} alt={title} />
                            )}
                            <Link
                                href={'/[lang]/blog/post/[slug]'}
                                as={`/en/blog/post/${slug}`}
                            >
                                <a>
                                    <CardBody
                                        css={{
                                            '@desktop': {
                                                padding: '0'
                                            }
                                        }}
                                    >
                                        <Box
                                            css={{
                                                '@mobile': {
                                                    marginBottom: '$s1'
                                                },
                                                '@sd': {
                                                    marginBottom: '$s15'
                                                }
                                            }}
                                        >
                                            <Flag key={index} small>
                                                {category[0].title}
                                            </Flag>
                                        </Box>
                                        <Text
                                            as={'h5'}
                                            maxLines={featuredImage ? '2' : '3'}
                                            css={{
                                                '@mobile': {
                                                    marginBottom: '$s05'
                                                },
                                                '@sd': {
                                                    marginBottom: '$s1'
                                                }
                                            }}
                                        >
                                            {title}
                                        </Text>
                                        <Text
                                            as={'p'}
                                            maxLines={{
                                                '@mobile': featuredImage
                                                    ? '3'
                                                    : '14',
                                                '@desktop': '2'
                                            }}
                                            small={featuredImage ? false : true}
                                        >
                                            {excerpt}
                                        </Text>
                                        {window.innerWidth >= 960 && (
                                            <Button tertiary={'light'}>
                                                read more
                                            </Button>
                                        )}
                                    </CardBody>
                                </a>
                            </Link>
                        </Card>
                    )
                )}
            </CssGrid>
        </Box>
    );
};
