import Title from "../UI/Title";
import Text from "../UI/Text";
import Button from "../UI/Button";
import Iframe from "../Iframe";

import { useState } from "react";

function SecurityNumberInvalid({ textColor }: { textColor?: string }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section
      data-testid="test_id_invalid"
      className="flex items-end justify-center gap-2 w-full h-auto flex-col border-y border-zinc-300 py-6"
      id="security_number_invalid_container_pbm"
    >
      <Title className="w-full" textColor={textColor}>
        CPF não cadastrado!
      </Title>
      <Text className="w-full" textColor={textColor}>
        Por favor, conclua seu cadastro para habilitar os benefícios deste
        laboratório.
      </Text>
      <Button
        data-testid="test_id_openiframe"
        onClick={() => setOpenModal(true)}
        id="button_accept_terms_pbm"
      >
        Aceitar os termos
      </Button>

      <Iframe
        url="https://termo.azurewebsites.net/"
        title="Aceitar termos PBM"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </section>
  );
}

export default SecurityNumberInvalid;
