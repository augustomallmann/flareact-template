import { Box, Card, Flag, Text } from '../Ui';

import { AzionImage } from '../Img';
import { CardBody } from '../Ui/Card';
import Link from 'flareact/link';
import { PostCardType } from '../../types/post';
import { motion } from 'framer-motion';
import { useRouter } from 'flareact/router';

const desktopVariants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 }
};

const mobileVariants = {
    hidden: { opacity: 0, x: 100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 100, y: 0 }
};

export default function ContentCard({
    categories,
    excerpt,
    imgFeatured,
    title,
    slug
}: PostCardType) {
    const router = useRouter();
    const lang = router.query.lang;
    console.log(categories[0].title);
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={
                window.innerWidth >= 960 ? desktopVariants : mobileVariants
            }
            transition={{
                duration: 0.6
            }}
        >
            <Card
                postGrid
                css={{
                    borderRadius: 4,
                    height: '100%'
                }}
            >
                <Link
                    href={'/[lang]/blog/post/[slug]'}
                    as={`/${lang}/blog/post/${slug}`}
                >
                    <a>
                        {imgFeatured && (
                            <AzionImage
                                src={imgFeatured}
                                width={300}
                                height={235}
                                alt={title}
                            />
                        )}
                        <CardBody>
                            <Box
                                css={{
                                    '@mobile': {
                                        marginBottom: '$s1'
                                    },
                                    '@sd': {
                                        marginBottom: '$s15'
                                    }
                                }}
                            >
                                <Flag small>{categories[0].title}</Flag>
                            </Box>
                            <Text
                                as={'h5'}
                                maxLines={'3'}
                                css={{
                                    '@mobile': {
                                        marginBottom: '$s05'
                                    }
                                }}
                            >
                                {title}
                            </Text>
                            <Text
                                as={'p'}
                                maxLines={imgFeatured ? '3' : '14'}
                                small={imgFeatured ? false : true}
                            >
                                {excerpt}
                            </Text>
                        </CardBody>
                    </a>
                </Link>
            </Card>
        </motion.div>
    );
}
