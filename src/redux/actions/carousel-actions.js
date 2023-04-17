export const carouselActions = {
    
    initCarousel: (state, action) => {
        state.carouselItems = action.payload;
        return state;
    },

    initCarouselImages: (state, action) => {
        state.carouselImages = action.payload;
        return state;
    },

    deleteCarousel: (state, action) => {
        let list = [...state.carouselItems].filter(carouselItem => carouselItem.id !== action.payload);
        state.carouselItems = list;
        return state;
    },
    updateCarousel: (state, action) => {
        let list = [];
        state.carouselItems.forEach(item => {
            item.id === action.payload.id  ? list.push(action.payload) : list.push(item);
        });
        state.carouselItems = list;
        return state;
    },

    addCarousel : (state, action) => {
        state.carouselItems.push(action.payload);
        return state;
    },
}