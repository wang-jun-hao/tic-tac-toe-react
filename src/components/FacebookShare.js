import React from "react";
import {FacebookShareButton, FacebookIcon} from "react-share";

export default function FacebookShare(props) {
  return (
      <FacebookShareButton
          className="share-btn"
          url={"https://wang-jun-hao.github.io/tic-tac-toe-react/"}
          quote={"I won a tic-tac-toe game playing as " + props.winner + "!"}>
        <FacebookIcon round size={36} />
      </FacebookShareButton>
  );
}
