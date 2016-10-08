import React from 'react';
import fetchEmail from '../utils/fetchEmail';

class Fetcher extends React.Component {
  state = {
      data: null,
      hasFetched: false
  }

  async componentDidMount() {
    const {doFetch} = this.props;
    const data = await doFetch(this.props);
    this.setState({hasFetched: true, data});
  }

  render() {
      const {hasFetched, data} = this.state;

      return this.props.children(hasFetched, data);
  }
}

const EmailDisplayer = ({username}) => (
    <Fetcher doFetch={() => fetchEmail(username)}>
        {(hasFetched, email) => (
            hasFetched ?
            <span>{username}'s email is {email}</span> :
            <span>Loading...</span>
        )}
    </Fetcher>
);

export default (
    <EmailDisplayer username="Guy" />
);
