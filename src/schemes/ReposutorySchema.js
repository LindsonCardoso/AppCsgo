export default class RepositorySchemaProPlayers{
    static schema ={
        name: 'Proplayers',
        primaryKey: 'id',
        properties: {
           play_Id:{ type: 'int', indexed: true},
           play_FirstName: 'string',
           play_CommonName: 'string',
           play_MatchName: 'string',
           play_BirthCountry: 'string',
           play_Nationality: 'string',
           play_image: 'string',
           description: 'string'
        }


    }
}