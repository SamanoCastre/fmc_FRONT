export const userActions = {
    
    initUsers: (state, action) => {
        state.users = action.payload;
        return state;
    },

    deleteUser: (state, action) => {
        let list = [...state.users].filter(user => user.id !== action.payload);
        state.users = list;
        return state;
    },

    updateUser: (state, action) => {
        let list = [];
        state.users.forEach(user => {
            user.id === action.payload.id  ? list.push(action.payload) : list.push(user);
        });
        state.users = list;
        return state;
    },

    addUser : (state, action) => {
        state.users.push(action.payload);
        return state;
    }
}