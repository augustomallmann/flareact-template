import Document, { FlareactScript, Head, Html, Main } from 'flareact/document';

import { getCssText } from '../src/styles/stitches.config';

const pulse = `<script>
    if (typeof window.addEventListener === "function") {
        window.addEventListener("load", function() {
            if (window.azpulse === undefined) {
                var pulse = document.createElement("script");
                pulse.src = "//client.azionrum.net/2082s/azion-pulse.js";
                document.body.appendChild(pulse);
            }
        });
    }
</script>
`;

const hubspot =
    '<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5759082.js"></script>';

const gtmHead = `<script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NCNDRN2');</script>
    <!-- End Google Tag Manager -->`;
const gtm = ` <!-- Google Tag Manager (noscript) -->
                    <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCNDRN2" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                    </noscript>
                    <!-- End Google Tag Manager (noscript) -->`;
class MyDocument extends Document {
    static async getEdgeProps(ctx: any) {
        try {
            const initialProps = await Document.getEdgeProps(ctx);
            const data = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1'
            ).then((res) => res.json());
            return {
                ...initialProps,
                data,
                styles: (
                    <>
                        {initialProps.styles}

                        <style
                            id="stitches"
                            dangerouslySetInnerHTML={{ __html: getCssText() }}
                        />
                    </>
                )
            };
        } catch (e) {
            console.error(e.message);
        } finally {
            null;
        }
    }

    render() {
        console.log(this.props.data);
        console.log(this.props, 'props');
        return (
            <Html>
                <Head>
                    <meta
                        name="facebook-domain-verification"
                        content="8nux2xhl21yvil08vezdvwfeuizhoz"
                    />
                </Head>

                <body>
                    <Main />
                    <FlareactScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
