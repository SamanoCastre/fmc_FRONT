import Service from './Service';

export default class NavService extends Service {

    list = (page) => {
        let nav = [];
        
        if(page === 'home') {
            const organisation = [];
            organisation.push({href: '#franceeurope', text: '- Relais France-Europe'});
            organisation.push({href: '#team', text: '- Notre équipe en France'});
            organisation.push({href: '#organization', text: '- Fondation Max CADET Haïti'});
            organisation.push({href: '#activities', text: '- Activités de la clinique'});
            organisation.push({href: '#dentalfund', text: '- The MAX & THERESE CADET dental fund, inc. aux USA'});


            const plus = [];//Tableau vide
            plus.push({href: '#news', text: 'Actualités de la clminique de Port-au-prince'});
            plus.push({href: '#projects', text: 'Action de l\'association en France (projets)'});
            plus.push({href: '#sites', text: 'Les sites associés'});
            plus.push({href: '#login', text:'Administration'});


            nav.push({group: null, order:1, 'item':{htmlClass:'', href: '/', text: 'accueil'}});
            nav.push({group: 'organisation', order:2,header:'Notre organisation', item:organisation});
            nav.push({group:null, order:3,'item':{htmlClass: 'donation-button', href: '#donation', text: 'Faire un don'}});
            nav.push({group:null, order:4,'item':{htmlClass:'', href: '#partners', text: 'Nos partenaires'}});
            nav.push({group:null, order:5,'item':{htmlClass:'', href: '#posts', text: 'Nos publications'}});
            nav.push({group:null, order:6,'item':{htmlClass:'', href: '#contact', text: 'Contactez-nous'}});
            nav.push({group: 'plus', order:7,header:'plus', item:plus});
        }
        else if(page === 'admin') {
            nav.push({group: null, order:1, 'item':{href: '/', text: 'Page d\'accueil'}});
            nav.push({group: null, order:1, 'item':{href: '#deconnexion', text: 'Se deconnecter'}});
        }
        
        return nav;

    }

    
}