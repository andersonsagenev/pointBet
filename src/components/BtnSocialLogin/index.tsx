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
}
export function BtnSocialLogin({ title, svg: Svg, ...rest }: BtnSocialProps){

    return (
        <Button>
            <ImageContainer>
                <Svg />
            </ImageContainer>

            <Text>
                {title}
            </Text>
        </Button>
    );
}


