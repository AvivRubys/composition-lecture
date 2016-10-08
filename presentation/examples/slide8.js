import React from 'react';
import fetchEmail from '../utils/fetchEmail';

class Fetcher extends React.Component {
  state = {
      data: null
  }

  async componentDidMount() {
    const {doFetch} = this.props;
    const data = await doFetch(this.props);
    this.setState({data});
  }

  render() {
      const {data} = this.state;
      const {dataName, doFetch, ...otherProps} = this.props;

      return React.cloneElement(this.props.children, {[dataName]: data, ...otherProps});
  }
}

const EmailDisplayer = ({username, email}) => (
  email ? 
  <span>{username}'s email is {email}</span> :
  <span>Loading...</span>
);

export default (
  <Fetcher username="Guy" dataName="email" doFetch={props => fetchEmail(props.username)}>
    <EmailDisplayer />
  </Fetcher>
);