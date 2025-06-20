import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";

function PBM() {
  return (
    <Container variant="main">
      <Header />

      <Container variant="simple">
        <Form />
      </Container>

      <Footer />
    </Container>
  );
}

export default PBM;
