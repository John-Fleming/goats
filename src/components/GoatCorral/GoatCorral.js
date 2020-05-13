import React from 'react';
import './GoatCorral.scss';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';
import Goat from '../Goat/Goat';

class GoatCorral extends React.Component {
  static propTypes = {
    freeAGoat: PropTypes.func.isRequired,
    useAGoat: PropTypes.func.isRequired,
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats, useAGoat, freeAGoat } = this.props;
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} useAGoat={useAGoat} freeAGoat={freeAGoat}/>
    ));
    return (
      <div className="GoatCorral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCorral;
