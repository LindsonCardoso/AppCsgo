import Realm from 'realm'
import Proplayers from '../schemes/ReposutorySchema'
export default function getRealm(){
    return Realm.open(({
        schema: [Proplayers],
    }));
}