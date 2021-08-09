import React from 'react';
import Header from './components/Header1';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

function App() {

  return (
    <div>
      {/* header section */} 
      <Header name={'Nattapon Tancho'} studentId={'620610786'}></Header>

      {/* todo section */}
      <TodoList></TodoList>
      
      {/* footer section */}
      <Footer></Footer>

      </div>
  );
}

export default App;
