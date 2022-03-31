import { styled } from '../../../styles/stitches.config';

export const AvatarGroup = styled('span', {
    '& > * + *': {
        marginLeft: '-$s05'
    }
});
