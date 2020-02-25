import moment from "moment";
import produce from 'immer';

var initialState = {
   
  users: [
      {
          id: Math.random(),
          dateCadastro: moment('02/20/2020'),
          nome: 'Pablo A S',
          dateNasci: moment("02/12/1991"),
          idade: '28',
          cpf: '123.456.789-90',        
          editing: false
      },
  ],
  form: {
      id: '',
      dateCadastro: '',
      nome: '',
      dateNasci: '',
      idade: '',
      cpf: '',
      editing: false
  }

}
console.log(initialState.users);

const usersReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'ADD_USER':

      let tempusers = state.users;
      tempusers.push(action.payload);
      state={
        ...state,
        user: tempusers,
        form: initialState.form
      }
      break;
      case "SET_VALUES_FORM":
        console.log(action.payload)     
        state = {
          ...state,
          form: {
            ...state.form,
            ...action.payload
          }
        };
        break;
        case "DELETE_USER":
      state = {
        ...state,
        users: state.users.filter(c => c.id !== action.payload)
      };
      break;
      case "EDIT_USER":
        let userEdit = state.users;
        let editingUser = userEdit.find(c => c.id === action.payload.id);
        console.log('teste',editingUser, userEdit, action.payload.id);
        editingUser.editing= true;
        state = {
         ...state,       
        form: editingUser
      };
      break;
      case "UPDATE_USER":        
      const newState = produce(state, draft=>{
        const filtered = draft.users.filter(c=> c.id ===action.payload.id);
        console.log('FILTERED', filtered)

        draft.users = filtered
        draft.users.push(action.payload)

      })
      state= newState;
      
      break;
      default:
        return state;
  }    
return state;
}
export default usersReducer;