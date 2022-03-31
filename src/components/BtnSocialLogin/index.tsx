import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { 
    Button, 
    ImageContainer, 
    Text 
} from './styles'

interface BtnSocialProps extends RectButtonProps {
    title: string
    svg: React.FC<SvgProps>
    onPress: () => void;
}
export function BtnSocialLogin({ title, svg: Svg, onPress, ...rest }: BtnSocialProps){

    return (
        <Button onPress={onPress}>
            <ImageContainer>
                <Svg />
            </ImageContainer>

            <Text>
                {title}
            </Text>
        </Button>
    );
}


