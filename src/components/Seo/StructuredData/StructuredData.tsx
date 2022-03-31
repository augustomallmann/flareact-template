import Head from 'flareact/head';
import { toJson } from '../../../utils/Seo/handleConvertToJson';

export interface StructuredDataProps {
    type?: string;
    scriptId?: string;
    [key: string]: any;
}

export const StructuredData = ({
    type = 'Thing',
    keyOverride,
    scriptKey,
    scriptId = undefined,
    ...rest
}: StructuredDataProps & { scriptKey: string }) => {
    return (
        <Head>
            <script
                type="application/ld+json"
                id={scriptId}
                dangerouslySetInnerHTML={toJson(type, { ...rest })}
                key={`jsonld-${scriptKey}${
                    keyOverride ? `-${keyOverride}` : ''
                }`}
            />
        </Head>
    );
};
