import { Img, ImgProps } from '../Img';

import { Picture } from '../Picture';
import { styled } from '../../styles/stitches.config';

type CardImageProps = ImgProps;

export const Card = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    backgroundColor: '$uiBackgroundBase',
    borderRadius: 4,
    variants: {
        transparent: {
            true: {
                backgroundColor: '$none'
            }
        },
        postGrid: {
            true: {
                minWidth: '216px',
                transition: 'box-shadow 0.2s',
                '@md': {
                    minWidth: '264px'
                },
                '@sd': {
                    minWidth: '0'
                },
                '@desktop': {
                    '&:hover': {
                        boxShadow: '$azionSiteShadow'
                    }
                }
            }
        }
    }
});

export const CardImage = ({ src, alt, title }: CardImageProps) => {
    return (
        <Picture>
            <Img card src={src} alt={alt} title={title ? title : alt} />
        </Picture>
    );
};

export const CardBody = styled('div', {
    padding: '$s1',
    '@sd': {
        padding: '$s25'
    }
});
