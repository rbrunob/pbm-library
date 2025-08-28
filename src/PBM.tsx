import Header from "./components/Header";
import Container from "./components/UI/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Loading from "./components/UI/Loading";
import Button from "./components/UI/Button";
import BenefitsTable from "./components/BenefitsTable";
import SecurityNumberInvalid from "./components/SecurityNumberInvalid";

import { useCallback, useEffect, useState } from "react";
import SecurityNumberRegitered from "./components/SecurityNumberRegitered";
import { GetAuthorization } from "./services/authorization";
import { ArrowRight } from "lucide-react";
import { usePBMStore } from "./libs/zustand/usePBM";
import { GetProductByEAN } from "./services/get-product-by-ean";
import { useTargetProducts } from "./libs/zustand/useTargetProduct";

export interface PBMProps {
  originalProductPrice: number;
  industryLogo: string;
  clientID: string;
  eanProduct: string;
}

function PBM({
  originalProductPrice,
  industryLogo,
  clientID,
  eanProduct,
}: PBMProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const { setState, state, setTargetProduct } = usePBMStore();
  const { setTargetProductInternal } = useTargetProducts();

  const handleGetProductByEAN = useCallback(async () => {
    try {
      const response = await GetProductByEAN({ PRODUCT_EAN: eanProduct });

      if (response.success) {
        // Pega a posição zero, pois a API sempre retorna um array, mesmo contendo somente um item.
        const productByEan = response.data.message.products[0];
        setTargetProduct(productByEan);
        setTargetProductInternal(productByEan);
      }
    } catch (error) {
      console.error(error);
    }
  }, [eanProduct, setTargetProduct, setTargetProductInternal]);

  const handleAuthorizationRequest = useCallback(async () => {
    try {
      const response = await GetAuthorization({ clientID: clientID });

      if (response.success && eanProduct) {
        handleGetProductByEAN();
      } else {
        console.error("Authorization failed:", response.message);
      }
    } catch (error) {
      console.error("Error fetching authorization:", error);
    }
  }, [clientID, handleGetProductByEAN, eanProduct]);

  useEffect(() => {
    handleAuthorizationRequest();
  }, [handleAuthorizationRequest]);

  return (
    <Container variant="main">
      <Header originalProductPrice={originalProductPrice || 0} />

      <Container variant="simple">
        {state === "isEmpty" && !loading && (
          <>
            <Form setLoading={setLoading} />
            <Button
              className="bg-transparent p-0 pl-2 w-auto h-auto text-zinc-600 underline cursor-pointer hover:text-zinc-900 hover:bg-transparent flex items-center justify-start gap-1"
              onClick={() => setState("isActivated")}
            >
              <span>Consultar benefícios</span>
              <ArrowRight size={16} />
            </Button>
          </>
        )}

        {state === "isEmpty" && loading && <Loading />}

        {state === "isInvalid" && !loading && <SecurityNumberInvalid />}

        {state === "isRegistered" && !loading && <SecurityNumberRegitered />}

        {state === "isActivated" && !loading && (
          <BenefitsTable originalProductPrice={originalProductPrice} />
        )}
      </Container>

      <Footer industryLogo={industryLogo} />
    </Container>
  );
}

export default PBM;
