import { styled } from '../../../styles/stitches.config';

type AvatarProps = {
    src: string;
};

const AvatarImg = styled('span', {
    display: 'inline-block',
    backgroundSize: 'cover',
    width: '$3',
    height: '$3',
    borderRadius: '$circular'
});

export const Avatar = ({ src }: AvatarProps) => {
    return (
        <AvatarImg
            css={{
                backgroundImage: `url(https://www.azion.com${src}?ims=24x24)`
            }}
        />
    );
};
