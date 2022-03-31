import { PostCardType } from './post';

export type FeaturedContentType = {
    title: string;
    featuredImage: string;
    excerpt: string;
    categories: {
        slug: string;
        title: string;
    };
    slug: string;
};

export type HubPageContent = {
    categorySlug: string;
    paginationOf: string;
    current: number;
    previous: number;
    nextPage: number;
    isLast: boolean;
    posts: PostCardType[];
};
