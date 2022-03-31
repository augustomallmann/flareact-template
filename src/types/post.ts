import { CSS } from '@stitches/react';

export interface PostProps {
    post: PostType;
}

export type PostType = {
    title: string;
    authors: AuthorsType[];
    body: string;
    category: CategoriesType[];
    date: string;
    description: string;
    featuredImage: string;
    noindex: boolean;
    ogImage?: string;
    relatedContent: PostCardType[];
    timeToRead: number;
};

export interface HeroProps
    extends Pick<
        PostType,
        'title' | 'authors' | 'featuredImage' | 'date' | 'timeToRead'
    > {
    category: string;
    css?: CSS;
}

export interface AuthorsListProps {
    css?: CSS;
    authors: AuthorsType[];
}

export type AuthorsType = {
    avatar: string;
    id: string;
    name: string;
    role: {
        [key: string]: string;
    };
};

export type CategoriesType = {
    slug: string;
    title: string;
};

export type PostCardType = {
    title: string;
    slug: string;
    category: CategoriesType[];
    excerpt: string;
    featuredImage: string;
    noindex: boolean;
};
