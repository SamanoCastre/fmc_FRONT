import Service from './Service';

export default class TeamService extends Service {

    list = () => {
        let team = [];
        team.push( 
            {photo: 'team01.jpg', nom: 'Tracy One', role: 'Président', description: 'Mauris vel lorem non odio accumsan scelerisque. Nullam id augue vel nibh soll.'},
            {photo: 'team02.jpg', nom: 'Mary Two', role: 'Srcrétaire', description: 'Mauris vel lorem non odio accumsan scelerisque. Nullam id augue vel nibh soll.'},
            {photo: 'team03.jpg', nom: 'Julia Three', role: 'Trésorier', description: 'Mauris vel lorem non odio accumsan scelerisque. Nullam id augue vel nibh soll.'}
        );
         return team;

    }
}