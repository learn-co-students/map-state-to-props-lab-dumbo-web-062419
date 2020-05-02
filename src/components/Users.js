import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
          return <li key={Math.round(Math.random() * 1000)} >{user.username} from {user.hometown}</li>
        })}
        </ul>
        <p>{this.props.users.length} users total.</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
