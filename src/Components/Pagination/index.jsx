import { Pagination } from "antd";

// eslint-disable-next-line react/prop-types
const PaginationComponent = ({ currentPage, total, onChange }) => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "right", 
      marginTop: "20px",
      padding: "20px" 
    }}>
      <Pagination
        current={currentPage}
        onChange={onChange}
        total={total}
        pageSize={20}
        showSizeChanger={false}
      />
    </div>
  );
};
export default PaginationComponent;