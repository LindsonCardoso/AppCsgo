import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import {getStatusBarHeight}  from 'react-native-status-bar-height' //força o statusbar no android ir para baixa o conteude 

export const Background = styled(LinearGradient).attrs({

    colors: ['#7159c1', '#9849c1'],
    start: {x: 0, y:1},
    end: {x: 1, y: 0},

})`
flex:1;
padding-top: ${30 + getStatusBarHeight(true)}px;
`;


export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 40px;
width: 40%;
height: 20%;
border-radius: 40px;

`;


export const AreaInput = styled.View`
flex-direction: row;

`;
export const Input = styled.TextInput`
`;


export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color:#FFF;
    width: 80%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #000;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #FFF;
`;