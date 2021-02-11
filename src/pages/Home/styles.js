import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import {getStatusBarHeight}  from 'react-native-status-bar-height' //força o statusbar no android ir para baixa o conteude 

export const Container = styled(LinearGradient).attrs({

    colors: ['#7159c1', '#9849c1'],
    start: {x: 0, y:0},
    end: {x: 1, y: 0},

})`
 
    flex:1;
    padding-top: ${70 + getStatusBarHeight(true)}px;
`;

export const FlatList = styled.FlatList.attrs({
    constentContainerStyle: {paddingHorizontal: 20},
    ShowsVerticalScrollIndicator: false,
})`
    padding: 0 20px;
    margin-top: 20px;


`;

