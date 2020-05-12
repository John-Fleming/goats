import React from 'react';
import './GoatCorral.scss';
import Goat from '../Goat/Goat';


class GoatCorral extends React.Component {
  render() {
    const { goats, useAGoat } = this.props;
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} useAGoat={useAGoat}/>
    ));
    return (
      <div className="GoatCorral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCorral;
