import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Link to="/character">
        <li>Character</li>
      </Link>
      <Link to="/todo">
        <li>TodoList</li>
      </Link>
    </div>
  );
}

export default Main;
