import React from 'react';
import {Helmet} from "react-helmet";

function User() {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Users</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <header className="App-header">
        <p>
          Users
        </p>
      </header>
    </div>
  );
}

export default User;
