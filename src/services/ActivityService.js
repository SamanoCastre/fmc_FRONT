import Service from './Service';

export default class ActivityService extends Service {

    list = () => {
        let activity = [];
        activity.push( 
            {photo: 'activity01.jpg', title: 'Activité 01', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'activity02.jpg', title: 'Activité 02', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'activity03.jpg', title: 'Activité 03', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'}
        );
        /*
            {photo: 'activity04.jpg', title: 'Activité 04', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'activity05.jpg', title: 'Activité 05', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'activity06.jpg', title: 'Activité 06', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'activity07.jpg', title: 'Activité 07', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
         );*/
         return activity;

    }
}