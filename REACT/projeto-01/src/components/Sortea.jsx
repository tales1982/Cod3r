import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Sortea = props => {
  const {min, max} = props
  const aleatorio = parseInt(Math.random() * (max - min) + min)
  return (
    <Card title="Sorteio de um numeros" purple>
      <div>
        <span>
            <span>Resultado:</span>
            <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Sortea)