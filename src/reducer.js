const initialState = {};

export const reducer = (state = initialState, action) => {

    if (action.type === "SET_STATE") {
        return Object.assign({},
            state, {
                activationChosen: true
            },
            action.state
        );
    }

    return state;
};