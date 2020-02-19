import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, DatePicker, TimePicker, Button, } from 'antd';
import moment from 'moment';
import {
    Input,
    InputNumber,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    AutoComplete,
  } from 'antd';
  
class UserForm extends React.Component {
    handleSubmit = (e) => {
    e.preventDefault();
    const values = {
     
    }
}
 
render() {
    const dateFormat = 'YYYY/MM/DD';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      }; 

    return (
        //<div className="User-Form-Container">
        <Form  onSubmit={this.handleSubmit}>
            <Form.Item label="Cadastro">
              <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            </Form.Item>
            
            <Form.Item label="Nome">
              <Input placeholder="Digite seu nome " />
            </Form.Item>

            <Form.Item label="Data de Nascimento">
              <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
            </Form.Item>
            <Form.Item label="Idade">
              <Input></Input>
            </Form.Item>

            <Form.Item label="CPF">
              <Input></Input>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Cadastrar</Button>
            </Form.Item>

        </Form>
       // </div>
    );
    }
}

const mapStateToProps = state => ({
    //user: state.
});

export default connect(mapStateToProps)(UserForm);