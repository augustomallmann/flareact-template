export async function getInitialData() {
    const endpoint =
        'https://azion-blog-stage.s3.amazonaws.com/content/data/buttons/buttons.json';

    return await fetch(endpoint).then((res) => res.json());
}
