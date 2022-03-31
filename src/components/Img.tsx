import { AzionImageLoader } from '../utils/AzionImageLoader';
import { CSS } from '@stitches/react/types/css-util';
import { styled } from '../styles/stitches.config';

export interface ImgProps {
    srcSet?: string;
    src: string;
    alt: string;
    card?: boolean;
    title?: string;
    css?: CSS;
}
export type AzionImageTypes = {
    src: string;
    alt: string;
    width: number;
    height?: number;
    quality?: number;
};

const ImgStyle = styled('img', {
    width: '100%',
    height: 'auto',
    variants: {
        card: {
            true: {
                borderRadius: '$4 $4 0 0'
            }
        }
    }
});

export const Img = ({ src, srcSet, alt, ...props }: ImgProps) => {
    return <ImgStyle srcSet={srcSet} src={src} alt={alt} {...props} />;
};

export const AzionImage = ({
    src,
    alt,
    width,
    height,
    quality,
    ...rest
}: AzionImageTypes) => {
    const handleImageOpts = AzionImageLoader(src, width, height, quality);

    return (
        <ImgStyle
            width={width}
            // height={height}
            srcSet={`${handleImageOpts[0]} 1x, ${handleImageOpts[1]} 1.5x, ${handleImageOpts[2]} 2x`}
            src={handleImageOpts[0]}
            alt={alt}
            {...rest}
        />
    );
};
