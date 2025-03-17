import { Image as ImageAnt } from "antd";

// eslint-disable-next-line react/prop-types
const Image = ({ imageUrl, width, height }) => {
  return (
    <>
      <ImageAnt width={width} height={height} src={imageUrl} />
    </>
  );
};
export default Image;