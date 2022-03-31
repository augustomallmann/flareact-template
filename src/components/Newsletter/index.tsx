import { Col, Row, Text } from '../Ui';

import { NewsletterForm } from '../Forms/NewsletterForm';
import { styled } from '../../styles/stitches.config';

const NewsletterStyle = styled('div', {
    display: 'grid',
    gap: '$s05',
    backgroundColor: '$uiBackgroundBase',
    boxShadow: '$azionSiteShadow',
    margin: '$s3 0 $s35',
    padding: '$s15 $s1',
    borderRadius: '$4',
    '@md': {
        padding: '$s2 $s25'
    },
    '@sd': {
        margin: '$s4 0 $s45',
        gap: '$s1'
    },
    '@slg': {
        gap: '$s3'
    },
    '@desktop': {
        alignItems: 'center',
        gridTemplateColumns: '0.6fr 1.4fr'
    },
    '& form': {
        display: 'grid',
        gap: '$s05',
        height: 'fit-content',
        '@sd': {
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '$s1'
        },
        '@xlg': {
            gridTemplateColumns: '1.4fr 0.6fr'
        }
    }
});

export const Newsletter = () => {
    return (
        <Row>
            <Col
                col={{ '@lg': 18 }}
                offset={{ '@lg': 1 }}
                noGutters={{ '@lg': true }}
            >
                <NewsletterStyle>
                    <Text as="p" big margin={false}>
                        Become an expert in Edge Computing.
                    </Text>
                    <NewsletterForm />
                </NewsletterStyle>
            </Col>
        </Row>
    );
};
