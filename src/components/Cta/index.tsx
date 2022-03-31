import { Col, Label, Row, Text } from '../Ui';

import { NewsletterForm } from '../Forms/NewsletterForm';
import { styled } from '../../styles/stitches.config';

const CtaStyle = styled('section', {
    backgroundColor: '$uiBackgroundBase',
    padding: '$s3 0 $s35',
    '@sd': {
        padding: '$s6 0'
    },
    '& form': {
        display: 'flex',
        flexDirection: 'column',
        gap: '$s1',
        '& .input-container': {
            width: '100%'
        }
    }
});

export const CtaWithForm = () => {
    return (
        <CtaStyle>
            <Row css={{ alignItems: 'center' }}>
                <Col
                    col={{ '@sd': 4, '@lg': 10 }}
                    offset={{ '@sd': 1, '@lg': 2 }}
                    noGutters={{ '@lg': true }}
                >
                    <Label
                        css={{
                            '@sm': {
                                marginBottom: '$s1'
                            },
                            '@sd': {
                                marginBottom: '$s05'
                            }
                        }}
                    >
                        Sign Up
                    </Label>
                    <Text as={'h2'}>Become an expert in Edge Computing</Text>
                </Col>
                <Col
                    col={{ '@sd': 3, '@lg': 6 }}
                    offset={{ '@sd': 1, '@lg': 0 }}
                    noGutters={{ '@lg': true }}
                >
                    <NewsletterForm />
                </Col>
            </Row>
        </CtaStyle>
    );
};
