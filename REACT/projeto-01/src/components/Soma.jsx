import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Soma = props => {
  const {min,max} = props
  return (
    <Card title="Soma dos numeros" blue>
      <div>
        <span>
            <span>Resultado:</span>
            <strong>{min + max}</strong>
        </span>
      </div>
    </Card>
  );
};

//mapea os elementos
const mapStateProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateProps)(Soma)