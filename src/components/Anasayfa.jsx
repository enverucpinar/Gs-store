import React from "react";
import myVideo from "../video.mp4";
function Anasayfa() {
  return (
    <div>
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=kTpOmhAlzr4" /> */}
      <video width="100%" height="100%" controls>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Anasayfa;
