import { useMemo } from 'react';
import { StarIcon } from '../../Ui/Icons';
type RatingIconProps = {
    index: number;
    rating: number;
    hoverRating: number;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
    onSaveRating: (index: number) => void;
};
export const RatingIcon = (props: RatingIconProps) => {
    const {
        index,
        rating,
        hoverRating,
        onMouseEnter,
        onMouseLeave,
        onSaveRating
    } = props;
    const fill = useMemo(() => {
        if (hoverRating >= index) {
            return '$primaryColorBase';
        } else if (!hoverRating && rating >= index) {
            return '$primaryColorBase';
        }
        return '$iconColorDisable';
    }, [rating, hoverRating, index]);
    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}
        >
            <StarIcon color={fill} />
        </div>
    );
};
