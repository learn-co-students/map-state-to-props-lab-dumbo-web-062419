import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {

    const allUsers = this.props.users.map((user) => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {allUsers}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  //debugger;
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
