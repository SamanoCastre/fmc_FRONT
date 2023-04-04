import Service from './Service';

export default class NewsService extends Service {

    list = () => {
        let news = [];
        news.push( 
            {photo: 'news01.jpg', title: 'Actualité 01', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'news02.jpg', title: 'Actualité 02', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'news03.jpg', title: 'Actualité 03', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'}
        );
        /*
            {photo: 'news04.jpg', title: 'Actualité 04', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'news05.jpg', title: 'Actualité 05', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'news06.jpg', title: 'Actualité 06', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
            {photo: 'news07.jpg', title: 'Actualité 07', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sapiente, saepe, velit, repellendus doloribus blanditiis repudiandae nobis optio quasi nulla aliquam nisi voluptatibus.', date:'26/06/2022', auteur: 'Samano C.'},
         );*/
         return news;

    }
}