import React from 'react'

import {Container,FlatList,Text,TouchBack,ConteinerMenu} from './styles'
import CardPlayer from '../../Componentes/CardPlayer'
import Icon from 'react-native-vector-icons/FontAwesome'

function Players({navigation}){
    return(

            <Container>

                    <ConteinerMenu>
                    <TouchBack>
                        <Icon name="chevron-left" size={20} color="#FFF"
                                onPress={() => navigation.navigate('LogIn')}
                        />

                    </TouchBack>
                 <Text>Players</Text>
                 </ConteinerMenu>   



                <FlatList
                        keyboardShouldPersistTaps="handled"
                        data={[
                                {
                                id: 1,
                                topRank: 1,
                                image: "lllsi",
                                name: "s1mples",
                                time: "Nave",
                                country: "UKR"
                        },
                        {
                                id:2,
                                topRank: 1,
                                image: "sdlçald",
                                name: "devices",
                                time: "ast",
                                country: "Germany"
                        },
                        {
                                id:3,
                                topRank: 1,
                                image: "sdlçald",
                                name: "devices",
                                time: "ast",
                                country: "BR"
                        },
                
                ]}
                        keyExtractor={item => String(item.id)}
                        renderItem={({item}) => (
                             <CardPlayer data={item}/>                   
                        )}                
                />



            </Container>


    );}


export default Players;