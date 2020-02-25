import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Button,Divider} from 'antd'
import moment from "moment";
import {DeleteUser,EditUser} from "../actions/userAction"

class UsersTable extends Component {
      
        columns = [
        {
          title: 'Data Cadastro',
          dataIndex: 'dateCadastro',
          key: 'datecadastro',
          render: text => moment(text).format("DD/MM/YYYY")
        },
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
          title: 'Data de Nascimetno',
          dataIndex: 'dateNasci',
          key: 'dateNasci',
          render: text => moment(text).format("DD/MM/YYYY")
        },
        {
          title: 'Idade',
          dataIndex: 'idade',
          key: 'idade'
        },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf'
        },
        {
          title: 'Ações',
          key: 'action',
       width: 100,
          render: (text, row) => (
            <span><Button 
            size="small"
            icon="delete"
            type="danger"
            onClick={() => this.props.dispatch(DeleteUser(row.id))}>
            Deletar 
          </Button>
          <Divider type="horizontal" />
          <Button
              size="small"
              icon="edit"
              type="primary"
              onClick={() => this.props.dispatch(EditUser(row.id))}>
              Editar
            </Button>
          </span>
              
          )
        },

      ];
     
   render() {
       return (
           <div>
               <Table dataSource={this.props.user.users} columns={this.columns} />                           
               
           </div>
       );
   }
}

const mapStateToProps = (state) => {
   return {
      user: state.user

   }
}
export default connect(mapStateToProps)(UsersTable);