import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Button,  
    Input,
    Form, 
    DatePicker} from 'antd';
import { AddUser, SetValuesForm, UpdateUser } from '../actions/userAction';

  


class UserForm extends Component {
    handleSubmit = (e) => {
    e.preventDefault();
    const data = {
     id: Math.random(),
     dateCadastro: this.props.user.form.dateCadastro,
     nome: this.props.user.form.nome,
     dateNasci: this.props.user.form.dateNasci,
     idade: this.props.user.form.idade,
     cpf: this.props.user.form.cpf,
     editing: false
    }
    if (this.props.user.form.editing === false)
      this.props.dispatch(AddUser(data));
    else
      this.props.dispatch(UpdateUser(data));
};

  handleChange (data, field) {
    console.log(field,data);
    if (field ==="nome")
    this.props.dispatch(
        SetValuesForm({
          nome: data,
          dateCadastro: this.props.user.form.dateCadastro,
          dateNasci: this.props.user.form.dateNasci,
          idade: this.props.user.form.idade,
          cpf: this.props.user.form.cpf

        })
      );
    if (field === "dateCadastro")
        
        this.props.dispatch(
          SetValuesForm({
          name: this.props.user.name,
          dateCadastro: data,
          dateNasci: this.props.user.form.dateNasci,
          idade: this.props.user.form.idade,
          cpf: this.props.user.form.cpf
          })
        );
    if (field === "dateNasci" )
      this.props.dispatch(
          SetValuesForm({
            name: this.props.user.name,
            dateCadastro: this.props.user.dateCadastro,
            dateNasci: data,
            idade: this.props.user.form.idade,
            cpf: this.props.user.form.cpf
            })
          );
    if (field === "idade" )
      this.props.dispatch(
          SetValuesForm({
            name: this.props.user.name,
            dateCadastro: this.props.user.dateCadastro,
            dateNasci: this.props.user.form.dateNasci,
            idade: data,
            cpf: this.props.user.form.cpf
            })
          );
    if (field === "cpf" )
      this.props.dispatch(
          SetValuesForm({
            name: this.props.user.name,
            dateCadastro: this.props.user.dateCadastro,
            dateNasci: this.props.user.form.dateNasci,
            idade: this.props.user.form.idade,
            cpf: data
          })
          );

  }


render() {
  
    return (
          <div className="User-Form-Container">
            <Form  onSubmit={this.handleSubmit} >
              <Form.Item label="Data de Cadastro" >
                <DatePicker 
                value={this.props.user.form.dateCadastro} 
                required 
                type="DateInput"
                onChange= {value => this.handleChange(value,'dateCadastro')} />
              </Form.Item>
                
              <Form.Item label="Nome" >
                <Input 
                value={this.props.user.form.nome} 
                placeholder="Digite seu nome" 
                required 
                type="text" 
                onChange= {(e) => this.handleChange(e.target.value,'nome')}/>
              </Form.Item>

              <Form.Item label="Data de Nascimento" >
                <DatePicker 
                value={this.props.user.form.dateNasci}
                required 
                type="DateInput"
                onChange= {value => this.handleChange(value,'dateNasci')}/>
              </Form.Item>

              <Form.Item  label="Idade" >
                <Input 
                value={this.props.user.form.idade} 
                placeholder=" Digite sua Idade" 
                required type="text"
                onChange= {(e) => this.handleChange(e.target.value,'idade')}/>
              </Form.Item>

              <Form.Item label="CPF"  >
                <Input 
                value={this.props.user.form.cpf} 
                placeholder="Digite seu CPF" 
                required 
                type="text"
                onChange= {(e) => this.handleChange(e.target.value,'cpf')}/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.user.form.editing ?'Editar' : 'Cadastrar'}</Button>
              </Form.Item>

            </Form>
          </div>
    );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    
});

export default connect(mapStateToProps)(UserForm);