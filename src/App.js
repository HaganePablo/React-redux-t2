import React, { Component } from 'react';
import UsersTable from './UsersTable';
import { Row, Col } from 'antd';
import UserForm from './UserForm';
import {PageHeader} from 'antd';

class App extends Component {
  render() {
    return (
      <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
      }}
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />,
    <body>
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Cadastro Usuário</h2>
        </div>
          <Row>
            <Col span={6}><UserForm /></Col>
            <Col span={18}><UsersTable /></Col>
          </Row>
        
        
      </div>
      </body>
    );
  }
}
export default App;