import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Button,  
    Input,
    Form, 
    DatePicker,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    AutoComplete,
  } from 'antd';
import { AddUser } from './actions/userAction';
  


class UserForm extends Component {
    handleSubmit = (event) => {
    event.preventDefault();
    const data = {
     id: new Date(),
     date: this.props.user.dateCadastro,
     nome: this.props.user.nome,
     dateNasci: this.props.user.dateNasci,
     idade: this.props.user.idade,
     cpf: this.props.user.cpf,
     editing: false
    }
    this.props.dispatch(AddUser(data));
}
 
render() {
    
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  
    return (
          <div className="User-Form-Container">
            <Form  onSubmit={this.handleSubmit} >
              <Form.Item label="Cadastro" value={this.props.user.form.dateCadastro} >
                <DatePicker   format={dateFormatList}required type="text" />
              </Form.Item>
                
              <Form.Item label="Nome" value={this.props.user.form.nome} >
                <Input  placeholder="Digite seu nome " required type="text" />
              </Form.Item>

              <Form.Item label="Data de Nascimento" value={this.props.user.form.dateNasci} >
                <DatePicker  format={dateFormatList} required type="text" />
              </Form.Item>

              <Form.Item  label="Idade" value={this.props.user.form.idade} >
                <Input  placeholder=" Digite sua Idade" required type="text"></Input>
              </Form.Item>

              <Form.Item label="CPF" value={this.props.user.form.cpf} >
                <Input  placeholder="Digite seu CPF" required type="text"></Input>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">Cadastrar</Button>
              </Form.Item>

            </Form>
          </div>
    );
    }
}

const mapStateToProps = state => ({
    user: state.user
    
});

export default connect(mapStateToProps)(UserForm);