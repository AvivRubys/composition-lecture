import React from 'react';
import fetchEmail from '../utils/fetchEmail';

class EmailDisplayer extends React.Component {
  state = {
    email: ""
  };

  componentDidMount() {
    const {username} = this.props;
    fetchEmail(username).then(email => this.setState({email}))
  }
  
  render() {
    const {username} = this.props;
    const {email} = this.state;
    
    return <span>{username}'s email is {email}</span>;
  }
}

export default (
    <EmailDisplayer username="Guy" />
);