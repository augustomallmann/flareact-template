import { CSS } from '@stitches/react/types/css-util';
import { styled } from '../../styles/stitches.config';
import { Text, Flag } from '../Ui';

const TopBarStyle = styled('div', {
    padding: '$s1',
    backgroundColor: '$uiBackgroundHoverInverse'
});

const BoldText = styled('span', {
    fontWeight: 'bold'
});

export const Newsletter = () => {
    return (
        <TopBarStyle>
            <Text as="small" css={{ color: '$textColorStrongInverse' }}>
                <Flag>News:</Flag>Azion é listada no relatório
                <BoldText>The Forrester New Wave™</BoldText>: Edge Development
                Platforms, Q4 2021 |
                <a href="#" target="_blank">
                    Saiba mais
                </a>
            </Text>
        </TopBarStyle>
    );
};
