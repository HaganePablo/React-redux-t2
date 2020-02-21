import moment from "moment"
var initialState = {
   
  users: [
      {
          id: moment(new Date()),
          dateCadastro: '20/2/2020',
          nome: 'Pablo A S',
          dateNasci: '25/12/1991',
          idade: '28',
          cpf: '123.456.789-90',        
          editing: false
      },
  ],
  form: {
      id: moment(new Date()),
      dateCadastro: '',
      nome: '',
      dateNasci: '',
      idade: '',
      cpf: '',
  }
  

}

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
      default:
        return state;
  }
      
return state;
}
export default usersReducer;