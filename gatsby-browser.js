import React from 'react';
import { TylerAuerProvider } from './src/providers';

export function wrapRootElement({ element }) {
  return <TylerAuerProvider>{element}</TylerAuerProvider>;
}
