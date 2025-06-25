import Header from "@/components/Header";
import Container from "@/components/UI/Container";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import AcceptCPF from "@/components/AcceptCPF";
import RejectCPF from "@/components/RejectCPF";
import Loading from "@/components/UI/Loading";

import { useState } from "react";

function PBM() {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  return (
    <Container variant="main">
      <Header />

      <Container variant="simple">
        {isValid === null && !isLoading && (
          <Form loading={setIsloading} result={setIsValid} />
        )}

        {isValid === null && isLoading && <Loading />}

        {isValid !== null && !isValid && !isLoading && <RejectCPF />}
        {isValid && !isLoading && <AcceptCPF />}
      </Container>

      <Footer />
    </Container>
  );
}

export default PBM;
