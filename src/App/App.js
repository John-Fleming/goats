import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCorral/GoatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <h1>Goats Yoga Ltd.</h1>
        <GoatCorral goats={goats}/>
      </div>
    );
  }
}

export default App;
