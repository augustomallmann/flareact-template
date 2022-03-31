import { Text, Card, CssGrid } from '../../Ui';
import { RatingIcon } from './RatingIcon';
import { useState } from 'react';
import { CSS } from '@stitches/react';

type StarRatingProps = {
    css?: CSS;
};

export const StarRating = ({ css }: StarRatingProps) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const onMouseEnter = (index: number) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    };

    const onSaveRating = (index: number) => {
        setRating(index);
    };
    return (
        <Card
            css={{
                alignItems: 'center',
                padding: '$s1 $s2',
                boxShadow: '$azionSiteShadow',
                margin: '$s3 auto $s3',
                '@md': {
                    width: 'max-content'
                },
                '@desktop': {
                    margin: '$s5 auto $s5',
                    padding: '$s15 $s3'
                },
                ...css
            }}
        >
            <Text big css={{ marginBottom: '$s05' }}>
                Was this article helpful?
            </Text>
            <CssGrid flow={'column'} gapX={'half'}>
                {[1, 2, 3, 4, 5].map((index) => {
                    return (
                        <RatingIcon
                            key={index}
                            index={index}
                            rating={rating}
                            hoverRating={hoverRating}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onSaveRating={onSaveRating}
                        />
                    );
                })}
            </CssGrid>
        </Card>
    );
};
