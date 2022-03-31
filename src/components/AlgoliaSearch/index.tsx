import {
    Hits,
    InstantSearch,
    SearchBox,
    connectHighlight
} from 'react-instantsearch-dom';

import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
    'PYJUZH6VNQ',
    '7c1795c333053265edd2aeb199745797'
);

// const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
//     const parsedHit = highlight({
//         highlightProperty: '_highlightResult',
//         attribute,
//         hit
//     });

//     return (
//         <div>
//             {parsedHit.map((part) =>
//                 part.isHighlighted ? <mark>{part.value}</mark> : part.value
//             )}
//         </div>
//     );
// });

// const Hit = ({ hit }) => (
//     <p>
//         <CustomHighlight attribute="name" hit={hit} />
//     </p>
// );

export const AlgoliaSearch = () => (
    <InstantSearch searchClient={searchClient} indexName="azion-site-en">
        <SearchBox />
        <Hits />
    </InstantSearch>
);
