import React, { Component } from 'react';
import UsersTable from './components/UsersTable';
import { Row, Col } from 'antd';
import UserForm from './components/UserForm';
import {Layout} from 'antd';

const {Header, Content} = Layout

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <Layout>
         <Header style={{ position: 'top', zIndex: 1, width: '100%', color: '' }}>
           <h2>Tarefa 2</h2>
          </Header>

          <Content style={{ padding: '2 50px' }}>
            
          <Row>
            <Col span={6}><UserForm /></Col>
            <Col span={18}><UsersTable /></Col>
          </Row>
          </Content>
          </Layout>
        
      </div>
     
    );
  }
}
export default App;