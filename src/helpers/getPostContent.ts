interface PostContentProps {
    title: string;
    authors: string[];
    category: string[];
    date: string;
    description: string;
    featuredImage: string;
    ogImage: string;
    noindex: boolean;
    body: string;
    timeToRead: number;
    relatedContent: string[];
}

interface ApiResponse {
    title: string;
    authors: string[];
    category: string[];
    date: string;
    updated_at: string;
    description: string;
    featuredImage: string;
    og_image: string;
    noindex: boolean;
    body: string;
    related_content: string[];
}

const handleTimeToRead = (content: string) => {
    const words = content.split(' ');
    const wordsPerMinute = 200;
    const timeToRead = Math.ceil(words.length / wordsPerMinute);

    return timeToRead;
};

export async function getPostContent(
    lang: string,
    slug: string
): Promise<PostContentProps> {
    const endpoint = `https://azion-blog-stage.s3.amazonaws.com/content/data/json/posts/${lang}/${slug}.json`;

    const data: ApiResponse = await fetch(endpoint).then((res) => res.json());

    return {
        title: data.title,
        authors: data.authors,
        body: data.body,
        category: data.category,
        description: data.description,
        featuredImage: data.featuredImage,
        noindex: data.noindex,
        ogImage: data.og_image,
        relatedContent: data.related_content,
        date: new Date(data.date).toLocaleDateString(undefined, {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        }),
        timeToRead: handleTimeToRead(data.body)
    };
}
