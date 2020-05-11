import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';

class App extends React.Component {
  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
  }

  render() {
    return (
      <div className="App">
        <h2>Goats</h2>
        <button className="btn btn-info"><i className="fas fa-tree"></i></button>
      </div>
    );
  }
}

export default App;
