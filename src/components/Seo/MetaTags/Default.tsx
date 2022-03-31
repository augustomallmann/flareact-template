import { Component } from 'react';
import { DefaultSeoProps } from '../../../types/seo';
import Head from 'flareact/head';
import { handleGenerateTags } from '../../../utils/Seo/handleGenerateTags';

export default class Seo extends Component<DefaultSeoProps, unknown> {
    render() {
        const {
            title,
            defaultTitle,
            dangerouslySetAllPagesToNoIndex = false,
            dangerouslySetAllPagesToNoFollow = false,
            description,
            canonical,
            openGraph,
            twitter,
            languageAlternates
        } = this.props;

        return (
            <Head>
                {handleGenerateTags({
                    title,
                    defaultTitle,
                    dangerouslySetAllPagesToNoIndex,
                    dangerouslySetAllPagesToNoFollow,
                    description,
                    canonical,
                    openGraph,
                    twitter,
                    languageAlternates
                })}
            </Head>
        );
    }
}
