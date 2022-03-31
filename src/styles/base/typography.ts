const headingsCommonAttributes = {
    color: '$textColorStrong',
    fontWeight: '$regular',
    paddingTop: 0,
    marginTop: 0,
    letterSpacing: '-0.001em'
};

export const typography = {
    h1: {
        ...headingsCommonAttributes,
        marginBottom: '$s2',
        lineHeight: '130%',
        fontSize: 'max(min(2.875vw, 3.125rem), 1.5rem)'
    },
    h2: {
        ...headingsCommonAttributes,
        marginBottom: '$s15',
        lineHeight: '140%',
        fontSize: 'clamp(1.5rem, 1.05rem + 2.25vw, 3.75rem)'
    },
    h3: {
        ...headingsCommonAttributes,
        marginBottom: '$s1',
        lineHeight: '140%',
        fontSize: 'clamp(1.25rem, 1.45rem + 1.5vw, 2.75rem)'
    },
    h4: {
        ...headingsCommonAttributes,
        marginBottom: '$s1',
        lineHeight: '160%',
        fontSize: 'clamp(1.12500rem, 1.025rem + 1.12500vw, 2.25rem)',
        fontWeight: '$medium'
    },
    h5: {
        ...headingsCommonAttributes,
        marginBottom: '$s1',
        lineHeight: '150%',
        fontSize: 'clamp(1rem, 0.85rem + 0.75vw, 1.75rem)',
        fontWeight: '$medium'
    },
    h6: {
        ...headingsCommonAttributes,
        fontSize: 'clamp(1rem, 0.8rem + 0.375vw, 1.75rem)'
    },
    b: {
        fontWeight: '$strong'
    },
    strong: {
        fontWeight: '$strong'
    },
    p: {
        color: '$textColorMedium',
        marginTop: '0',
        marginBottom: '$s1',
        lineHeight: '180%',
        letterSpacing: '-0.001em',
        fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.25rem)'
    },
    li: {
        color: '$textColorMedium',
        lineHeight: '180%',
        fontSize: 'clamp(1rem, 1.563vw, 1.25rem)'
    }
};
