import type {
    FeaturedContentType,
    HubPageContent
} from '../../../src/types/hub';

// import { AlgoliaSearch } from '../../../src/components/AlgoliaSearch';
import { CategoriesTab } from '../../../src/components/CategoriesTab';
import { ContentCardsGrid } from '../../../src/components/ContentCardsGrid';
import { CtaWithForm } from '../../../src/components/Cta';
import { FeaturedContent } from '../../../src/components/FeaturedContent';
import Head from 'flareact/head';
import { Newsletter } from '../../../src/components/Newsletter';
import { Seo } from '../../../src/components/Seo';
import { getCategoryContent } from '../../../src/helpers/getCategoryContent';
import { getFeaturedContent } from '../../../src/helpers/getFeaturedContent';
import { useRouter } from 'flareact/router';

type HubPageProps = {
    featuredContent: FeaturedContentType[];
    content: HubPageContent;
};

export const Category = ({ content, featuredContent }: HubPageProps) => {
    const router = useRouter();
    const lang = router.query.lang;
    const { paginationOf } = content;

    return (
        <>
            <Head>
                <meta
                    name="google-site-verification"
                    content="s85lczd_nkGu22GksdH7CgASa3Qx8DWMbHZuA5bdJS8"
                />
            </Head>
            <Seo
                title={paginationOf}
                description={paginationOf}
                openGraph={{
                    url: `https://www.azion.com/${lang}/blog/${paginationOf}`,
                    title: paginationOf,
                    description: 'description',
                    images: [{ url: 'https://www.azion.com/featured-image' }],
                    site_name: 'Azion Technologies'
                }}
            />
            <FeaturedContent content={featuredContent} />
            <Newsletter />
            {/* <AlgoliaSearch /> */}
            <CategoriesTab currentTab={content.paginationOf} />
            <ContentCardsGrid content={content} />
            <CtaWithForm />
        </>
    );
};

export async function getEdgeProps({ params }) {
    try {
        const { lang, category } = params;
        const formatSlug = category.replace('/', '');
        const featuredContent = await getFeaturedContent(lang);
        const content = await getCategoryContent(lang, formatSlug);
        return {
            props: {
                content,
                featuredContent
            }
        };
    } catch (e) {
        console.error('error page category', e.message);
    }
}

export default Category;
