import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Button,} from 'antd'

class UsersTable extends Component {
      
        columns = [
        {
          title: 'Data Cadastro',
          dataIndex: 'dateCadastro',
          key: 'datecadastro',
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
        },
        {
          title: 'Idade',
          dataIndex: 'idade',
          key: 'idade',
        },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf',
        },
        {
          title: 'Editar',
          key: 'edit',
          width: 100,
          render: () => <a>Deletar</a>,
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