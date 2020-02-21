export const AddUser = function (data) {
    console.log(data)
    return function (dispatch) {
        dispatch({
            type: 'ADD_USER',
            payload: data
        });
    }
};
export const DelPost = function (id) {
    return function (dispatch) {
        dispatch({
            type: 'DELETE_POST',
            payload: id
        });
    }
};

export const SetValuesForm = function(data) {
    return function(dispatch) {
      dispatch({
        type: "SET_VALUES_FORM",
        payload: data
      });
    };
  };