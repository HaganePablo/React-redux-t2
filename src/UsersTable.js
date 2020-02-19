import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'antd'

class UsersTable extends Component {

     dataSource = [
        {
          dateCadastro: '19/02/2020',
          nome: 'Mike',
          dateNasci: '19/02/2000',
          idade: '25',
          cpf: '123.456.789-00'
        },
        {
          dateCadastro: '19/02/2020',
          nome: 'Ricardo',
          dateNasci: '19/02/2000',
          idade: '25',
          cpf: '123.456.789-00'
        },
        {
          dateCadastro: '19/02/2020',
          nome: 'Pablo',
          dateNasci: '19/02/2000',
          idade: '25',
          cpf: '123.456.789-00'
        },
       
      ];
      
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
      ];

     
     
   render() {
       return (
           <div>
               <Table dataSource={this.dataSource} columns={this.columns} />                           
               
           </div>
       );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.users

   }
}
export default connect(mapStateToProps)(UsersTable);