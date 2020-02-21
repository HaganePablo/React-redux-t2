import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Button,  
    Input,
    InputNumber,
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
  


class UserForm extends React.Component {
    handleSubmit = (event) => {
    event.preventDefault();
    const data = {
     id: new Date(),
     date: this.props.dateCadastro,
     nome: this.props.nome,
     dateNasci: this.props.dateNasci,
     idade: this.props.idade,
     cpf: this.props.cpf,
     editing: false
    }
    this.props.dispatch(AddUser(data));
}
 
render() {
    
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  
    return (
          <div className="User-Form-Container">
            <Form  onSubmit={this.handleSubmit}>
              <Form.Item label="Cadastro" >
                <DatePicker value={this.props.user.form.dateCadastro}  format={dateFormatList}required type="text" />
              </Form.Item>
                
              <Form.Item label="Nome" >
                <Input value={this.props.user.form.nome} placeholder="Digite seu nome " required type="text" />
              </Form.Item>

              <Form.Item label="Data de Nascimento" >
                <DatePicker value={this.props.user.form.dateNasci} format={dateFormatList} required type="text" />
              </Form.Item>

              <Form.Item  label="Idade" >
                <Input value={this.props.user.form.idade} placeholder=" Digite sua Idade" required type="text"></Input>
              </Form.Item>

              <Form.Item label="CPF" >
                <Input value={this.props.user.form.cpf} placeholder="Digite seu CPF" required type="text"></Input>
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