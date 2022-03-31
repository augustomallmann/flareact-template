/* eslint-disable indent */
import { Col, CssGrid, Row, Text } from '../Ui';
import { useEffect, useReducer, useState } from 'react';

import ContentCard from './ContentCard';
import { PaginationButton } from '../PaginationButton';
import { useRouter } from 'flareact/router';

interface CategoryContentProps {
    content: ContentPageProps;
}

interface ContentPageProps {
    paginationOf: string;
    categorySlug: string;
    current: number;
    previous: number;
    nextPage: number;
    posts: PostsInterface[];
}

interface PostsInterface {
    category: string[];
    title: string;
    slug: string;
    excerpt: string;
    imgFeatured: string;
    noindex: boolean;
}

const reducerContent = (state, action) => {
    switch (action.type) {
        case 'NEW_ROUTE':
            return { ...state, [action.content.categorySlug]: action.content };
        case 'NEW_PAGE':
            return {
                ...state,
                [action.data.categorySlug]: {
                    paginationOf: action.data.paginationOf,
                    categorySlug: action.data.categorySlug,
                    current: action.data.current,
                    previous: action.data.previous,
                    nextPage: action.data.nextPage,
                    posts: [
                        ...state[action.data.categorySlug].posts,
                        ...action.data.posts
                    ]
                }
            };
        default:
            return state;
    }
};

export const ContentCardsGrid = ({ content }: CategoryContentProps) => {
    const router = useRouter();
    const lang = router.query.lang;
    const [isFetching, setFetching] = useState(false);

    const initialContent = {
        [content.categorySlug]: content
    };

    const [state, dispatch] = useReducer(reducerContent, initialContent);

    useEffect(() => {
        setFetching(true);
        dispatch({ type: 'NEW_ROUTE', content });
        setFetching(false);
    }, [router.asPath, content]);

    const getPosts = async () => {
        setFetching(true);

        const nextPage = state[content.categorySlug].nextPage;

        try {
            const endpoint = `https://52082s.ha.azioncdn.net/teste/en/teste?lang=${lang}&category=${content.categorySlug}&page=${nextPage}`;
            const data = await fetch(endpoint).then((res) => res.json());
            dispatch({ type: 'NEW_PAGE', data });

            setFetching(false);
        } catch (err) {
            console.log(err);
            setFetching(false);
        }
    };

    return !state[content.categorySlug] ? (
        <Text>Carregando....</Text>
    ) : (
        <Row>
            <Col col={{ '@lg': 20 }} noGutters={true}>
                <CssGrid
                    gap={1}
                    flow={{
                        '@mobile': 'column',
                        '@desktop': 'row'
                    }}
                    columns={{
                        '@sd': 3,
                        '@lg': 4
                    }}
                    css={{
                        paddingLeft: '$s1',
                        alignItems: 'strech',
                        '@mobile': {
                            overflow: 'scroll',
                            paddingBottom: '$s3'
                        },
                        '@sd': {
                            overflow: 'hidden',
                            paddingBottom: '$s4'
                        },
                        '@lg': {
                            paddingLeft: '5%',
                            paddingRight: '5%'
                        }
                    }}
                >
                    {state[content.categorySlug].posts !== undefined
                        ? state[content.categorySlug].posts.map(
                              (post, index) => (
                                  <ContentCard key={index} {...post} />
                              )
                          )
                        : 'Sem posts'}

                    {state[content.categorySlug].nextPage !== null && (
                        <PaginationButton
                            fetchFunction={getPosts}
                            isLoading={isFetching}
                        >
                            Load More
                        </PaginationButton>
                    )}
                </CssGrid>
            </Col>
        </Row>
    );
};
