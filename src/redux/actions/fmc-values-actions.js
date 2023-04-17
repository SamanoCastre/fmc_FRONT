export const fmcValueActions = {
    
    initFmcValues: (state, action) => {
        state.fmcValues = action.payload;
        return state;
    },
    deleteFmcValue: (state, action) => {
        let list = [...state.fmcValues].filter(fmcValue => fmcValue.id !== action.payload);
        state.fmcValues = list;
        return state;
    },

    updateFmcValue: (state, action) => {
        state.fmcValues.map(fmcValue => fmcValue.id === action.payload.id ? action.payload : fmcValue );
        return state;
    },

    addFmcValue : (state, action) => {
        state.fmcValues.push(action.payload);
        return state;
    },
    deleteListFmcValues: (state, action) => { 
        let filteredFmcValues = state.fmcValues.filter(
            fmcValue => action.payload.find(ap => ap.id !== fmcValue.id)
        );
        state.fmcValues = filteredFmcValues;
    },
    updateListFmcValues: (state, action) => {
        let copyValues = [];
        state.fmcValues.forEach(item=>{
            let filtered = action.payload.find(f=>f.id === item.id);
            filtered ? copyValues.push(filtered) : copyValues.push(item);
        });
        state.fmcValues = copyValues;
        return state;
    },
    addListFmcValues: (state, action) => {
        action.payload.forEach(item=>state.fmcValues.push(item));
        return state;
    },

    updateFmcValues: (state, action) => {
        let list = [...state.fmcValues].map(itemRx => {
            let itemF = action.payload.find(item=> item.id === itemRx.id)
            return itemF ? itemF: itemRx;
        })
        state.fmcValues = list;
        return state;
    },
}