export const AddUser = function (data) {
    console.log(data)
    return function (dispatch) {
        dispatch({
            type: 'ADD_USER',
            payload: data
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
  export const DeleteUser = function(id) {
    return function(dispatch) {
      dispatch({
        type: "DELETE_USER",
        payload: id
      });
    };
  };
  export const EditUser = function(id) {
    return function(dispatch) {
      dispatch({
        type: "EDIT_USER",
        payload: {id}
      });
    };
  };
export const UpdateUser = function(data) {
  return function (dispatch) {
    dispatch({
      type: "UPDATE_USER",
      payload: data
    });
  };
};