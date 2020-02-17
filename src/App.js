import React, { Component } from 'react';
import UsersTable from './UsersTable';
import { Row, Col } from 'antd';
import UserForm from './UserForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Comentarios</h2>
        </div>
          <Row>
            <Col span={6}><UserForm /></Col>
            <Col span={18}><UsersTable /></Col>
          </Row>
        
        
      </div>
    );
  }
}
export default App;