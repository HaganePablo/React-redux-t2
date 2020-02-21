export const AddUser = function (data) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_USER',
            payload: data
        });
    }
};

