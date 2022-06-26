import Service from './Service';

export default class ProjectService extends Service {

    list = () => {
        let project = [];
        project.push( 
            {photo: 'project01.jpg', title: 'Projet 01', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'project02.jpg', title: 'Projet 02', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'project03.jpg', title: 'Projet 03', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'project04.jpg', title: 'Projet 04', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'project05.jpg', title: 'Projet 05', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'project06.jpg', title: 'Projet 06', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'project07.jpg', title: 'Projet 07', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
         );
         return project;

    }
}