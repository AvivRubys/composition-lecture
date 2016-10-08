import React from 'react';
import fetchEmail from '../utils/fetchEmail';

class EmailDisplayerContainer extends React.Component {
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
    
    if (email) {
      return <EmailDisplayer username={username} email={email} />
    } else {
      return <span>Loading...</span>;
    }
  }
}

const EmailDisplayer = ({username, email}) => <span>{username}'s email is {email}</span>;

export default (
    <EmailDisplayerContainer username="Guy" />
);
