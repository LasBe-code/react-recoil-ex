import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './pages/CharacterCounter';
import Main from './pages/Main';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div style={{ padding: 100 }}>
      <RecoilRoot>
        <Routes>
          <Route path="/" exact={true} element={<Main />} />
          <Route
            path="/character"
            exact={true}
            element={<CharacterCounter />}
          />
          <Route path="/todo" exact={true} element={<TodoList />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
