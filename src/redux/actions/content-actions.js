export const contentActions = {
    
    initContents: (state, action) => {
        let contents = action.payload;
        state.contents = contents;
        return state;
    },
    deleteContent: (state, action) => {
        let list = [...state.contents].filter(content => content.id !== action.payload);
        state.contents = list;
        return state;
    },

    updateContent: (state, action) => {
        let list = [];
        state.contents.forEach(content => {
            content.id === action.payload.id  ? list.push(action.payload) : list.push(content);
        });
        state.contents = list;
        return state;
    },

    addContent : (state, action) => {
        state.contents.push(action.payload);
        return state;
    },
}