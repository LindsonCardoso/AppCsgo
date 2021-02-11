import React from 'react'
import {View, Text} from 'react-native'
import {Container,FlatList} from './styles'
import CardPlayer from '../../Componentes/CardPlayer'

function Home(){
    return(

            <Container>




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


export default Home;