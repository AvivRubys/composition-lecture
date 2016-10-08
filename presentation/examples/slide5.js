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
    
    return <EmailDisplayer username={username} email={email} />
  }
}

const branch = (predicate, LeftComponent, RightComponent) => props => predicate(props) ? <LeftComponent {...props} /> : <RightComponent {...props} />;

const EmailDisplayer = 
      branch(props => props.email.length !== 0,
             ({username, email}) => <span>{username}'s email is {email}</span>,
             () => <span>Loading...</span>);

export default (
    <EmailDisplayerContainer username="Guy" />
);

