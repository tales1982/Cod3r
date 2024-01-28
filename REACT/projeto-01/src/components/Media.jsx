import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Media = props => {
const {min, max} = props
  return (
    <Card title="Media de numeros" green>
      <div>
        <span>
            <span>Resultado:</span>
            <strong>{(min + max ) / 2}</strong>
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

export default connect(mapStateToProps)(Media)