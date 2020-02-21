import moment from "moment"
var initalState = {
    
    /* dateCadastro: '',
    nome: '',
    dateNasci: '',
    cpf: '',
    idade: '',
    editing: false, */
    users: [
        {
            id: new Date(),
            dateCadastro: '20/2/2020',
            nome: 'Pablo A S',
            dateNasci: '25/12/1991',
            cpf: '123.456.789-90'
        },
    ],
    form: {
        dateCadastro: '',
        nome: '',
        dateNasci: '',
        cpf: '',
        idade: '',
    }
    

}

const usersReducer = (state = initalState, action) =>{
    switch (action.type) {
      case 'ADD_USER':

        let tempusers = state.users;
        tempusers.push(action.payload);
        state={
          ...state,
          users: tempusers,
          form: initalState.form
        }
        break;
        default:
          break;
    }
        
  return state;
}
export default usersReducer;