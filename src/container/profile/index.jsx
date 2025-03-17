import { useEffect, useState } from "react"; // Add useState import
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Row, Col, Typography, Spin, Alert } from "antd";
import { addVisitedProfile } from "../../App/features/characterSlice";
import MainLayout from "../Layout";

const { Title } = Typography;

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState(null); 
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setStatus("loading");
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        if (!response.ok) throw new Error("Character not found");
        const data = await response.json();
        setCharacter(data);
        dispatch(addVisitedProfile(data));
        setStatus("succeeded");
      } catch (err) {
        setError(err.message);
        setStatus("failed");
      }
    };

    fetchCharacter();
  }, [id, dispatch]);

  if (status === "loading") {
    return <Spin size="large" style={{ display: "block", margin: "20px auto" }} />;
  }

  if (status === "failed") {
    return (
   
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        style={{ margin: "20px" }}
      />
    );
  }

  return (
    <MainLayout>
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <Link to="/" style={{ display: "block", marginBottom: "20px", textDecoration:"none"}}>
        ← Back to Homepage
      </Link>
      
      {character && (
        <Card style={{ padding: "20px" }}>
          <img
            src={character.image}
            alt={character.name}
            style={{
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto 20px",
              display: "block",
            }}
          />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title level={2} style={{ textAlign: "center" }}>
                {character.name}
              </Title>
            </Col>
            <Col xs={24} md={12}>
              <Title level={5}>
                <b>Status:</b> {character.status}
              </Title>
            </Col>
            <Col xs={24} md={12}>
              <Title level={5}>
                <b>Species:</b> {character.species}
              </Title>
            </Col>
            <Col xs={24} md={12}>
              <Title level={5}>
                <b>Gender:</b> {character.gender}
              </Title>
            </Col>
            <Col xs={24} md={12}>
              <Title level={5}>
                <b>Location:</b> {character.location?.name}
              </Title>
            </Col>
          </Row>
        </Card>
      )}
    </div>
    </MainLayout>
    
  );
}

export default Profile;