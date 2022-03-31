import { StructuredData, StructuredDataProps } from './StructuredData';

import React from 'react';
import { setAuthor } from '../../../utils/Seo/StructuredData/setAuthor';
import { setPublisher } from '../../../utils/Seo/StructuredData/setPublisher';

export interface ArticleStructuredDataProps extends StructuredDataProps {
    type?: 'Article' | 'Blog' | 'NewsArticle';
    url: string;
    title: string;
    images: ReadonlyArray<string>;
    datePublished: string;
    dateModified?: string;
    authorName: string | string[];
    description: string;
    publisherName?: string;
    publisherLogo?: string;
}

const ArticleJson = ({
    type = 'Article',
    keyOverride,
    url,
    title,
    images,
    datePublished,
    dateModified,
    authorName,
    publisherName = undefined,
    publisherLogo = undefined,
    description
}: ArticleStructuredDataProps) => {
    const data = {
        datePublished,
        description,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        headline: title,
        image: images,
        dateModified: dateModified || datePublished,
        author: setAuthor(authorName),
        publisher: setPublisher(publisherName, publisherLogo)
    };
    return (
        <StructuredData
            type={type}
            keyOverride={keyOverride}
            {...data}
            scriptKey="article"
        />
    );
};

export default ArticleJson;
