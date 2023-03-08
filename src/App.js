import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    // Starting
    return (
      <body>
        <Form />
        <Card />
      </body>
    );
  }
}

export default App;
