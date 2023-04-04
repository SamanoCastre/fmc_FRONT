import Service from './Service';

class SocialService extends Service {
    table = "social";
    list = () => {
        const socialInfo = [];
        socialInfo['phone'] = '+33758962345';
        socialInfo['email'] = 'relais.france_fmc@yahoo.com';
        socialInfo['facebook'] = 'https://www.facebook.com/profile';
        socialInfo['instagram'] = 'https://www.facebook.com/profile';
        socialInfo['twitter'] = 'https://www.facebook.com/profile';
        socialInfo['linkedin'] = 'https://www.facebook.com/profile';
        socialInfo['google-plus'] = 'https://www.facebook.com/profile';
        return socialInfo;
    };
    create = (item) => {};
    read = (id) => {};
    update = (item) => {};
    delete = (item) => {};
}

export default SocialService;
