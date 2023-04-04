import Service from './Service';

export default class TeamService extends Service {

    list = () => {
        let team = [];
        team.push( 
            {photo: 'avatar.webp', nom: 'No Name', role: 'Président', description: 'Mauris vel lorem non odio accumsan scelerisque. Nullam id augue vel nibh soll.'},
            {photo: 'avatar.webp', nom: 'No name', role: 'Srcrétaire', description: 'Mauris vel lorem non odio accumsan scelerisque. Nullam id augue vel nibh soll.'},
            {photo: 'avatar.webp', nom: 'No name', role: 'Trésorier', description: 'Mauris vel lorem non odio accumsan scelerisque. Nullam id augue vel nibh soll.'}
        );
         return team;

    }
}