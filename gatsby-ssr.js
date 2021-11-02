const React = require('react');
const { TylerAuerProvider } = require('./src/providers');

exports.wrapRootElement = ({ element }) => {
  return <TylerAuerProvider>{element}</TylerAuerProvider>;
};
