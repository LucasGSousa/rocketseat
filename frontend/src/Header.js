import React from 'react';

export default function Header({children}) {
  return (
      <header className="App-header">
          <h2>{children}</h2>
      </header>
  );
}