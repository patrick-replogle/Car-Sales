import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../actions";

const AddedFeature = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    return props.removeFeature(item);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(props.feature)} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
