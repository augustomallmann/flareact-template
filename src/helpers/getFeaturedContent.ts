export async function getFeaturedContent(lang) {
    try {
        return await fetch(
            `https://azion-blog-stage.s3.amazonaws.com/content/data/json/featured/${lang}/content.json`,
            { mode: 'no-cors' }
        ).then((res) => res.json());
    } catch (error) {
        return {
            error
        };
    }
}
