import Title from "@/components/UI/Title";
import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import Iframe from "@/components/Iframe";
import { useState } from "react";

function RejectCPF() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section className="flex items-end-safe justify-center-safe gap-2 w-full h-auto flex-col border-y border-zinc-300 py-6">
      <Title className="w-full">
        CPF não cadastrado ou não habilitado no produto!
      </Title>
      <Text className="w-full">
        Por favor, conclua seu cadastro para habilitar os benefícios deste
        laboratório.
      </Text>
      <Button onClick={() => setOpenModal(true)}>Aceitar os termos</Button>

      <Iframe
        url="https://termo.azurewebsites.net/"
        title="Aceitar termos PBM"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </section>
  );
}

export default RejectCPF;
