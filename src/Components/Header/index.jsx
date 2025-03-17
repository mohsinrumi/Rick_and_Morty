import { useDispatch } from "react-redux";
import { fetchData, setCurrentPage, setSearchQuery } from "../../App/features/characterSlice";
import { Row, Col, Input } from "antd";
import Heading from "../../Components/Heading";
const { Search } = Input;
function Header() {
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(setSearchQuery(value)); // Store search query in Redux
    dispatch(setCurrentPage(1));
    dispatch(fetchData({ page: 1, query: value }));
  };
  return (
    <Row align="middle" style={{ padding: "10px 20px" }}>
      <Col span={24} sm={14} offset={1}>
        <Heading level={3} title={"Rick And Morty"} />
      </Col>
      <Col span={24} sm={8} offset={1}>
        <Search
          placeholder="Search for a character"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Col>
    </Row>
  );
}
export default Header;












