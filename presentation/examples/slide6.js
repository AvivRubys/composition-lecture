import React from 'react';
import fetchEmail from '../utils/fetchEmail';

const fetcher = (dataName, doFetch) => BaseComponent => class extends React.Component {
  state = {
    data: null
  };
  
  async componentDidMount() { 
    const data = await doFetch(this.props);
    this.setState({data});
  }
  
  render() {
    const {data} = this.state;
    const passData = {
      [dataName]: data
    };
    
    return <BaseComponent {...this.props} {...passData} />
  }
}

const branch = (predicate, LeftComponent, RightComponent) => props => predicate(props) ? <LeftComponent {...props} /> : <RightComponent {...props} />;

const EmailDisplayer = 
  fetcher('email', props => fetchEmail(props.username))(
  branch(props => !!props.email,
             ({username, email}) => <span>{username}'s email is {email}</span>,
             () => <span>Loading...</span>))

export default (
    <EmailDisplayer username="Guy" />
);
