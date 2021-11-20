import Navbar from "../../components/Navbar";
import Featured from "../../components/Featured";
import { Container } from "./homeStyle";
import List from "../../components/List";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </Container>
  );
};

export default Home;
