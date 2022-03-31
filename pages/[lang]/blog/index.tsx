import type {
    FeaturedContentType,
    HubPageContent
} from '../../../src/types/hub';

import { CategoriesTab } from '../../../src/components/CategoriesTab';
import { ContentCardsGrid } from '../../../src/components/ContentCardsGrid';
import { CtaWithForm } from '../../../src/components/Cta';
import { FeaturedContent } from '../../../src/components/FeaturedContent';
import { Newsletter } from '../../../src/components/Newsletter';
import { Seo } from '../../../src/components/Seo';
import { getCategoryContent } from '../../../src/helpers/getCategoryContent';
import { getFeaturedContent } from '../../../src/helpers/getFeaturedContent';
import { useRouter } from 'flareact/router';

type HubPageProps = {
    featuredContent: FeaturedContentType[];
    content: HubPageContent;
};

export const Index = ({
    content,
    featuredContent
}: HubPageProps): JSX.Element => {
    // const router = useRouter();
    // const lang = router.query.lang;

    // const { paginationOf } = content;
    return (
        <>
            {/* <Seo
                title={paginationOf}
                description={paginationOf}
                openGraph={{
                    url: `https://www.azion.com/${lang}/blog/${paginationOf}`,
                    title: paginationOf,
                    description: 'description',
                    images: [{ url: 'https://www.azion.com/featured-image' }],
                    site_name: 'Azion Technologies'
                }}
            /> */}
            {/* <FeaturedContent content={featuredContent} /> */}
            <Newsletter />
            {/* <CategoriesTab currentTab={content.paginationOf} />
            <ContentCardsGrid content={content} /> */}
            <CtaWithForm />
        </>
    );
};

// export async function getEdgeProps() {
//     const lang = 'en';
//     const formatSlug = 'blog';
//     const featuredContent = await getFeaturedContent(lang);
//     const content = await getCategoryContent(lang, formatSlug);

//     return {
//         props: {
//             content,
//             featuredContent
//         }
//     };
// }

export default Index;
