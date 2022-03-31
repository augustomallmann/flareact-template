// import { fetchPost } from '../services/axios';

export async function getCategoryContent(
    lang: string,
    category: string,
    page = 1
): Promise<unknown> {
    try {
        const endpoint = `https://azion-blog-stage.s3.amazonaws.com/content/data/json/pagination/${lang}/${category}/page-${page}.json`;

        const data = await fetch(endpoint, { mode: 'no-cors' }).then((res) =>
            res.json()
        );

        return {
            paginationOf: data.paginationOf,
            categorySlug: category,
            current: data.current,
            previous: data.previous,
            nextPage: data.isLast ? null : data.current + 1,
            posts: data.posts.map((item) => {
                return {
                    title: item.title,
                    slug: item.slug,
                    categories: item.category,
                    excerpt: item.excerpt,
                    imgFeatured: item.featuredImage,
                    noindex: item.noindex
                };
            })
        };
    } catch (error) {
        return {
            error
        };
    }
}
