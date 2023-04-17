export const visitorActions = {
    addVisitor : (state, action) => {
        state.activities.push(action.payload);
        return state;
    }
}