import React from "react";
import Title from "../UI/Title";
import Text from "../UI/Text";
import Button from "../UI/Button";

function RejectCPF() {
  return (
    <section className="flex items-end-safe justify-center-safe gap-2 w-full h-auto flex-col border-y border-zinc-300 py-6">
      <Title className="w-full">
        CPF não cadastrado ou não habilitado no produto!
      </Title>
      <Text className="w-full">
        Por favor, conclua seu cadastro para habilitar os benefícios deste
        laboratório.
      </Text>
      <Button>Aceitar os termos</Button>
    </section>
  );
}

export default RejectCPF;
