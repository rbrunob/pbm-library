import Title from "../UI/Title";
import Text from "../UI/Text";
import Link from "../UI/Link";

function SecurityNumberRegitered({ textColor }: { textColor?: string }) {
  return (
    <section
      data-testid="test_id_registered"
      className="flex items-end justify-center gap-2 w-full h-auto flex-col border-y border-zinc-300 py-6"
      id="security_number_registered_container_pbm"
    >
      <Title className="w-full" textColor={textColor}>
        CPF não habilitado no produto!
      </Title>
      <Text className="w-full" textColor={textColor}>
        Por favor, conclua seu cadastro para habilitar os benefícios deste
        laboratório.
      </Text>
      <Link
        href={{
          pathname: "https://gip-pd-app.interplayers.com.br/idp-pd-app/adesao",
          param: { guid: "f2aff249-51b4-49a4-b671-d6bee89da0f0" },
        }}
      >
        Ativar CEP
      </Link>
    </section>
  );
}

export default SecurityNumberRegitered;
