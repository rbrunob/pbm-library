import Header from "./components/Header";
import Container from "./components/UI/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Loading from "./components/UI/Loading";
import BenefitsTable from "./components/BenefitsTable";
import SecurityNumberInvalid from "./components/SecurityNumberInvalid";

import { initialValuesSecutiryNumber, ISecurityNumber } from "./types/globals";

import { useCallback, useEffect, useState } from "react";
import SecurityNumberRegitered from "./components/SecurityNumberRegitered";
import { GetAuthorization } from "./services/authorization";

let hasAuthorization = false;

export interface PBMProps {
  originalProductPrice: number;
  industryLogo: string;
  clientID: string;
}

function PBM({ originalProductPrice, industryLogo, clientID }: PBMProps) {
  const [securityNumberState, setSecurityNumberState] =
    useState<ISecurityNumber>(initialValuesSecutiryNumber);

  const handleAuthorizationRequest = useCallback(async () => {
    try {
      const response = await GetAuthorization({ clientID: clientID });

      if (response.success) {
        console.log("Authorization succeeded:", response.message);
      } else {
        console.error("Authorization failed:", response.message);
      }
    } catch (error) {
      console.error("Error fetching authorization:", error);
    }
  }, [clientID]);

  useEffect(() => {
    if (!hasAuthorization) {
      hasAuthorization = false;
      handleAuthorizationRequest();
    }
  }, [handleAuthorizationRequest]);

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
