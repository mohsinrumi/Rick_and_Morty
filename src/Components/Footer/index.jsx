import { Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";
import { selectVisitedProfiles } from "../../App/features/characterSlice";
const { Link } = Typography;
const Footer = () => {
  const visitedProfiles = useSelector(selectVisitedProfiles);
  return (
    <div style={{ textAlign: "left", marginTop: "30px" }}>
      <Typography.Title level={4}>Recently visited profiles:</Typography.Title>
      <Row justify="left" gutter={[10, 10]}>
        {visitedProfiles.map((profile, index) => (
          <Col key={index}>
            <img
              src={profile.image}
              alt={profile.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                margin: "auto",
              }}
            />
            <Link href={`/profile/${profile.id}`} style={{ display: "block", marginTop: "5px" }}>
              {profile.name}
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Footer;