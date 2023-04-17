export const contactActions = {
    
    initContacts: (state, action) => {
        let contacts = action.payload;
        state.contacts = contacts;
        return state;
    },
    deleteContact: (state, action) => {
        let filteredContacts = state.contacts.filter(contact => contact.id !== action.payload);
        state.contacts = filteredContacts;
        return state;
    },

    updateContact: (state, action) => {
        let list = [];
        state.contacts.forEach(item => {
            item.id === action.payload.id  ? list.push(action.payload) : list.push(item);
        });
        state.contacts = list;
        return state;
    },

    addContact : (state, action) => {
        state.contacts.push(action.payload);
        return state;
    },

    resetContacts : (state, action) => {
        state.contacts = [];
        return state;
    }
}