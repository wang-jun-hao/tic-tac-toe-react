import React from "react";
import FacebookShare from './FacebookShare';
import TwitterShare from './TwitterShare';

export default function Social(props) {
  return (
      <div>
        <div className="social-prompt">
          Share your win, {props.winner}!
        </div>
        <div>
          <FacebookShare winner={props.winner} />
          <TwitterShare winner={props.winner} />
        </div>
      </div>
  );
}
