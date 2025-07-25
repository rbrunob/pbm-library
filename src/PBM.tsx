import Header from "./components/Header";
import Container from "./components/UI/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Loading from "./components/UI/Loading";
import BenefitsTable from "./components/BenefitsTable";
import SecurityNumberInvalid from "./components/SecurityNumberInvalid";

import { initialValuesSecutiryNumber, ISecurityNumber } from "./types/globals";

import { useState } from "react";
import SecurityNumberRegitered from "./components/SecurityNumberRegitered";

export interface PBMProps {
  originalProductPrice: number;
  industryLogo: string;
}

function PBM({ originalProductPrice, industryLogo }: PBMProps) {
  const [securityNumberState, setSecurityNumberState] =
    useState<ISecurityNumber>(initialValuesSecutiryNumber);

  return (
    <Container variant="main">
      <Header originalProductPrice={originalProductPrice || 0} />

      <Container variant="simple">
        {securityNumberState?.state === "isEmpty" &&
          !securityNumberState.isLoading && (
            <Form setData={setSecurityNumberState} />
          )}

        {securityNumberState?.state === "isEmpty" &&
          securityNumberState.isLoading && <Loading />}

        {securityNumberState?.state === "isInvalid" &&
          !securityNumberState.isLoading && <SecurityNumberInvalid />}

        {securityNumberState?.state === "isRegistered" &&
          !securityNumberState.isLoading && <SecurityNumberRegitered />}

        {securityNumberState?.state === "isActivated" &&
          !securityNumberState.isLoading && (
            <BenefitsTable originalProductPrice={originalProductPrice} />
          )}
      </Container>

      <Footer industryLogo={industryLogo} />
    </Container>
  );
}

export default PBM;
