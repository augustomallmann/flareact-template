const normalizeSrc = (src) => {
    return src[0] === '/' ? src.slice(1) : src;
};

export const AzionImageLoader = (src, width, height, quality) => {
    const result = [];
    const pixelRatio = [1, 1.5, 2];
    const srcSetWidth = pixelRatio.map((ratio) => {
        ratio * width;
        ratio * height;
    });
    let srcSetIndex;

    for (let i = 0; i < srcSetWidth.length; i++) {
        srcSetIndex = srcSetWidth[i];

        const params = [
            '?ims=',
            srcSetIndex || '',
            'x',
            height || '',
            quality ? `/filters:quality(${quality})` : ''
        ];
        const paramsString = params.join('');

        result.push(
            `https://www.azion.com/${normalizeSrc(src)}${paramsString}`
        );
    }

    return result;
};
