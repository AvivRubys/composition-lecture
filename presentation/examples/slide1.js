import React from 'react';

const EmailDisplayer = ({username, email}) => <span>{username}'s email is {email}</span>;

export default (
    <EmailDisplayer username="Guy" email="someGuy@gmail.com" />
);