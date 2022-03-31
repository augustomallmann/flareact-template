import './style.scss';

import { ArticleJson, Seo } from '../../../../src/components/Seo';
import {
    Box,
    Button,
    Card,
    Col,
    Input,
    Row,
    Text
} from '../../../../src/components/Ui';
import {
    CategoriesList,
    Hero,
    RelatedPosts,
    SocialShare,
    StarRating
} from '../../../../src/components/PostComponents';
import { useEffect, useRef, useState } from 'react';

import { AzionImage } from '../../../../src/components/Img';
import { ClosePost } from '../../../../src/components/ClosePost';
import { CodeHighlighter } from '../../../../src/components/Ui/CodeHighlighter';
import { PostProps } from '../../../../src/types/post';
import ReactMarkdown from 'react-markdown';
import { getPostContent } from '../../../../src/helpers/getPostContent';
import { useGlobalContext } from '../../../../src/contexts/GlobalContext';
import { useRouter } from 'flareact/router';
import { useScrollListener } from '../../../../src/hooks/useScrollListener';

export default function Slug({ post }: PostProps) {
    const router = useRouter();
    const { lang, slug } = router.query;
    const ref = useRef<HTMLDivElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { headerStatus } = useGlobalContext();

    const scroll = useScrollListener();

    useEffect(() => {
        let progressPercentage: number;
        if (ref && ref.current) {
            const { y } = scroll;
            const { height } = ref.current.getBoundingClientRect();
            progressPercentage = (Math.abs(y) / height) * 100;
        }

        setScrollPosition(progressPercentage >= 100 ? 100 : progressPercentage);
    }, [scroll, scrollPosition]);

    return (
        <>
            <Seo
                title={post.title}
                description={post.description}
                openGraph={{
                    url: `https://www.azion.com/${lang}/blog/post/${slug}`,
                    title: post.title,
                    description: post.description,
                    images: [{ url: `https://www.azion.com/${post.ogImage}` }],
                    site_name: 'Azion Technologies'
                }}
            />
            <ArticleJson
                url={`https://www.azion.com/${lang}/blog/post/${slug}`}
                title={post.title}
                images={[`https://www.azion.com${post.ogImage}`]}
                datePublished={post.date}
                authorName={post.authors.map((author) => author.name)}
                publisherName="Azion Technologies"
                publisherLogo="https://www.azion.com/photos/logo.jpg"
                description={post.description}
            />
            <article>
                <ClosePost percentage={scrollPosition} />
                <Hero
                    title={post.title}
                    featuredImage={post.featuredImage}
                    date={post.date}
                    timeToRead={post.timeToRead}
                    category={post.category[0].title}
                    authors={post.authors}
                />
                <Row>
                    <Col
                        col={{ '@lg': 20 }}
                        noGutters={{ '@lg': true }}
                        css={{
                            '@sd': {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(10, 1fr)',
                                gridTemplateAreas: `
                                        "A A A A A A . F F F"
                                        "C C C C C C . F F F"
                                        "C C C C C C . F F F"
                                        "C C C C C C . E E E"
                                        "C C C C C C . E E E"
                                        "C C C C C C . B B B"
                                        "C C C C C C . . . ."
                                        ". D D D D D . . . ."`,
                                paddingTop: '$s3'
                            },
                            '@lg': {
                                gridTemplateColumns: 'repeat(20, 1fr)',
                                gridTemplateAreas: `
                                        ". . A A A A A A A A A A A . . F F F F ."
                                        ". . C C C C C C C C C C C . . F F F F ."
                                        ". . C C C C C C C C C C C . . F F F F ."
                                        ". . C C C C C C C C C C C . . E E E E ."
                                        ". . C C C C C C C C C C C . . E E E E ."
                                        ". . C C C C C C C C C C C . . B B B B ."
                                        ". . C C C C C C C C C C C . . . . . . ."
                                        ". . . . D D D D D D D . . . . . . . . ."`,
                                paddingTop: '$s35'
                            }
                        }}
                    >
                        <Box
                            css={{
                                gridArea: 'B',
                                marginTop: '$s1',
                                '@desktop': {
                                    marginTop: '$none',
                                    marginBottom: '$s3',
                                    position: 'sticky',
                                    top: `${headerStatus ? '24px' : '119px'}`,
                                    transition: 'top 300ms ease-in-out',
                                    transform: 'translateZ(0)'
                                }
                            }}
                        >
                            <Card
                                css={{
                                    padding: '$s15'
                                }}
                            >
                                <Text as={'h5'}>
                                    Become an expert in Edge Computing
                                </Text>
                                <Input
                                    placeholder="Your e-mail"
                                    css={{ marginBottom: '$s1' }}
                                />
                                <Button
                                    primary={'light'}
                                    css={{ width: 'fit-content' }}
                                >
                                    subscribe newsletter
                                </Button>
                            </Card>
                        </Box>
                        <SocialShare
                            lang={lang}
                            slug={slug}
                            css={{
                                gridArea: 'A'
                            }}
                        />
                        <Box
                            css={{ gridArea: 'C' }}
                            ref={ref}
                            className={'post-text-content'}
                        >
                            <ReactMarkdown
                                components={{
                                    h1: 'h2',
                                    img: ({ src, alt }) => (
                                        <AzionImage
                                            src={src}
                                            width={700}
                                            alt={alt}
                                        />
                                    ),
                                    code: ({ children }) => (
                                        <CodeHighlighter>
                                            {children}
                                        </CodeHighlighter>
                                    )
                                }}
                            >
                                {post.body}
                            </ReactMarkdown>
                        </Box>
                        <StarRating css={{ gridArea: 'D' }} />
                        <CategoriesList gridArea={'E'} />
                        <RelatedPosts
                            related={post.relatedContent}
                            css={{ gridArea: 'F' }}
                        />
                    </Col>
                </Row>
            </article>
        </>
    );
}

export async function getEdgeProps({ params }) {
    const { lang, slug } = params;

    const formatSlug = slug.replace('/', '');

    const post = await getPostContent(lang, formatSlug);

    return {
        props: {
            post
        }
    };
}
