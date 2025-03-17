import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectCharacters, selectStatus, selectError, selectInfo, selectCurrentPage, setCurrentPage } from "../../App/features/characterSlice";
import MainLayout from "../Layout";
import CardComponent from "../../Components/Card";
import PaginationComponent from "../../Components/Pagination";
import { Row, Col, Spin, Alert } from "antd";

function HomePage() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const info = useSelector(selectInfo);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <MainLayout>
      {status === "loading" && <Spin size="large" style={{ display: "block", margin: "20px auto" }} />}
      
      {status === "failed" && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ margin: "20px" }}
        />
      )}

      <Row justify="center" gutter={[16, 16]}>
        {status === "succeeded" && characters?.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <CardComponent
              title={item.name}
              imgUrl={item.image}
              id={item.id}
              status={item.status}
            />
          </Col>
        ))}
      </Row>

      {info?.pages && (
        <PaginationComponent
          currentPage={currentPage}
          total={info.count}
          onChange={handlePageChange}
        />
      )}
    </MainLayout>
  );
}
export default HomePage;