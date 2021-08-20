import React from "react";
import {TwitterShareButton, TwitterIcon} from "react-share";

export default function TwitterShare(props) {
  return (
      <TwitterShareButton
          className="share-btn"
          url={"https://wang-jun-hao.github.io/tic-tac-toe-react/"}
          title={"I won a tic-tac-toe game playing as " + props.winner + "!"}>
        <TwitterIcon round size={36} />
      </TwitterShareButton>
  );
}
