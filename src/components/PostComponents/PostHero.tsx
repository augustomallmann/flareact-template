import { Box, Col, Flag, Row, Text } from '../Ui';

import { AuthorsList } from './AuthorsList';
import { HeroProps } from '../../types/post';
import { Img } from '../Img';
import { Picture } from '../Picture';

export const Hero = ({
    title,
    featuredImage,
    category,
    date,
    authors,
    timeToRead,
    css = null
}: HeroProps) => {
    return (
        <Row css={{ css }}>
            <Col
                col={{ '@lg': 20 }}
                noGutters={{ '@lg': true }}
                narrowRight={{ '@sd': true }}
                css={{
                    backgroundColor: '$uiBackgroundBody',
                    '@mobile': {
                        paddingTop: '$s3',
                        paddingBottom: '$s25'
                    },
                    '@sd': {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(20, 1fr)',
                        gridTemplateRows:
                            'auto minmax(100px, max-content) auto minmax(100px, max-content) auto',
                        gridTemplateAreas: `
                                        ". . . . . . . . . . . . . D D D D D D D"
                                        "A A A A . . . . C C C C . D D D D D D D"
                                        "B B B B B B B B B B B B . D D D D D D D"
                                        "E E E E E E E E E E E E . D D D D D D D"
                                        ". . . . . . . . . . . . . D D D D D D D"`
                    },
                    '@lg': {
                        gridTemplateAreas: `
                                        ". . . . . . . . . . . . . . D D D D D D"
                                        ". . A . . . . . . C C C C . D D D D D D"
                                        ". . B B B B B B B B B B B . D D D D D D"
                                        ". . E E E E E E E E E E E . D D D D D D"
                                        ". . . . . . . . . . . . . . D D D D D D"`
                    }
                }}
            >
                <Box
                    css={{
                        gridArea: 'A',
                        marginBottom: '$s1',
                        '@desktop': {
                            display: 'flex',
                            alignItems: 'flex-end',
                            marginTop: '$s4'
                        }
                    }}
                >
                    <Flag
                        small
                        css={{
                            height: 'fit-content',
                            width: 'fit-content',
                            '@desktop': {
                                gridArea: 'A'
                            }
                        }}
                    >
                        {category}
                    </Flag>
                </Box>
                <Box css={{ gridArea: 'B' }}>
                    <Text
                        as={'h2'}
                        css={{
                            '@desktop': {
                                gridArea: 'B'
                            }
                        }}
                    >
                        {title}
                    </Text>
                </Box>
                <Box
                    css={{
                        gridArea: 'C',
                        marginBottom: '$s075',
                        '@desktop': {
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            marginTop: '$s4',
                            marginBottom: '$s1'
                        }
                    }}
                >
                    <Text
                        as="span"
                        small
                        css={{
                            color: '$textColorMedium',
                            '@desktop': {
                                gridArea: 'C'
                            }
                        }}
                    >
                        {date} • {timeToRead} min read
                    </Text>
                </Box>
                <Picture
                    css={{
                        gridArea: 'D',
                        '@mobile': {
                            marginBottom: '$s15'
                        }
                    }}
                >
                    <Img
                        srcSet={`https://www.azion.com${featuredImage}?ims=672x 1x, https://www.azion.com${featuredImage}?ims=1008x 1.5x, https://www.azion.com${featuredImage}?ims=1344x 2x`}
                        src={`https://www.azion.com${featuredImage}?ims=672x672`}
                        alt={''}
                        css={{
                            display: 'flex',
                            objectFit: 'cover',
                            '@mobile': {
                                boxShadow: '$azionSiteShadow'
                            },
                            '@md': {
                                height: '336px'
                            },
                            '@sd': {
                                height: '100%'
                            }
                        }}
                    />
                </Picture>
                <AuthorsList css={{ gridArea: 'E' }} authors={authors} />
            </Col>
        </Row>
    );
};
