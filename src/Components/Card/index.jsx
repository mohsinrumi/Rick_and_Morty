import { Card, Badge } from "antd";
import { Link } from "react-router";
import Heading from "../Heading";
// eslint-disable-next-line react/prop-types
function CardComponent({ title, imgUrl, id, status }) {
  const statusColors = {
    Alive: "success",
    Dead: "error",
    unknown: "unknown",
  };
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={<img alt={title} src={imgUrl} />}
    >
      <Badge dot status={statusColors[status]}
        // color={statusColors[status] || "gray"}
        // text={<strong>{status}</strong>}
        style={{ marginBottom: "10px" }}
      />
      <Heading title={title} level={5} />
      <Link to={`/profile/${id}`}>See more</Link>
    </Card>
  );
}
export default CardComponent;