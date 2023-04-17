export const modalActions = {
    
    addTitle: (state, action) => {
        state.title = action.payload;
        return state;
    },

    addContent: (state, action) => {
        state.content = action.payload;
        return state;
    },

    initModal : (state, action) => {
        state.title = action.payload.title;
        state.content = action.payload.content;
        return state;
    },

    resetModal : (state) => {
        state.title = null;
        state.content = null;
        return state;
    }
}