export const commonActions = {
    setOnlineUser : (state, action) => {
        state.onlineUser = action.payload;
        return state;
    },

    setVisitedContent : (state, action) => {
        state.visitedContents.push(action.payload);
        return state;
    },

    setPage : (state, action) => {
        state.page = action.payload;
        return state;
    },

    setCurrentDashboardItem : (state, action) => {
        state.currentDashboardItem = action.payload;
        return state;
    },

    closeDropdown : (state) => {
        state.dropdownStatus = "close";
        return state;
    },

    openDropdown : (state) => {
        state.dropdownStatus = "open";
        return state;
    },

    initMenu : (state, action) => {
        state.menu = action.payload;
        return state;
    },

    updateMenu : (state, action) => {
        let list = [...state.menu].map(itemRx => {
            let itemF = action.payload.find(item=> item.id === itemRx.id);
            return itemF ? itemF : itemRx;
        })
        state.menu = list;
        return state;
    },

    resetCommons : (state) => {
        state.onlineUser = null;
        state.visitedContents = [];
        state.page = "home";
        state.subPage = "";
        state.currentDashboardItem = "visitors-stat";
        state.dropdownStatus = "close";
        state.menu = [];
    }
    
}

