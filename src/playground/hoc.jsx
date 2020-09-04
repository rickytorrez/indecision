import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // this is the hoc
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// regular function that returns the higher order component
const requireAuthetication = (WrappedComponent) => {
  // this is the hoc
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please sign up</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthetication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info='this are the deets' />,
  document.getElementById('app')
);

//const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='this are the deets' />,
//   document.getElementById('app')
// );
