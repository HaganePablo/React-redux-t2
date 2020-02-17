import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'antd'

class UsersTable extends Component {

     dataSource2 = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
        columns2 = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

     
     
   render() {
       return (
           <div>
               <Table dataSource={this.dataSource2} columns={this.columns2} />;                           
               )
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