import React from "react";
import "@google/model-viewer";
const ModelViewer = ({ src, width, height, style }) => {
  return (
    <model-viewer
      src={src}
      camera-orbit="80deg 80deg "
      disable-zoom
      disable-tap
      auto-rotate
      style={{ width, height, ...style }}
    ></model-viewer>
  );
};

export default React.memo(ModelViewer);
