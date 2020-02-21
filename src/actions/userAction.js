export const AddUser = function (data) {
    console.log(data)
    return function (dispatch) {
        dispatch({
            type: 'ADD_USER',
            payload: data
        });
    }
};

