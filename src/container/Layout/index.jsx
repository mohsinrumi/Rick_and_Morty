
import { Layout } from "antd";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Divider } from "antd";
const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => (
  <Layout>
    <AntHeader style={{ backgroundColor: "#fff" }}>
      <Header />
    </AntHeader>
    <Divider />
    <Content style={{ minHeight: "70vh" }}>{children}</Content>
    <AntFooter style={{ backgroundColor: "#efefef" }}>
      <Footer />
    </AntFooter>
  </Layout>
);
export default MainLayout;