import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, DatePicker, TimePicker, Button, } from 'antd';
import {
    Input,
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
    /* const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };*/
    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      }; 

    return (
        //<div className="User-Form-Container">
        <Form /* {...formItemLayout} */ onSubmit={this.handleSubmit}>
            <Form.Item label="Cadastro">
                {/* {getFieldDecorator */}('Data do Cadastro', config)(<DatePicker />)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
       // </div>
    );
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(UserForm);