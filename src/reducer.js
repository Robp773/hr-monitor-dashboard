const initialState = {validationList: [{time: null}]};

export const reducer = (state = initialState, action) => {

    if (action.type === "SET_STATE") {
        return Object.assign({},
            state,
            {validationList: action.validationList}
        );
    }

    return state;
};