import classNames from "classnames";
import { TriangleAlert } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface IFrameProps {
  url: string;
  title: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

function Iframe({ url, title, openModal, setOpenModal }: IFrameProps) {
  return (
    <main
      className={classNames(
        "fixed inset-0 flex items-center-safe justify-center-safe z-50 flex-col transition-all shadow",
        {
          "opacity-100 pointer-events-auto": openModal,
          "opacity-0 pointer-events-none": !openModal,
        }
      )}
    >
      <div
        className="bg-black/35 inset-0 absolute"
        onClick={() => {
          setOpenModal(false);
          window.location.reload();
        }}
      ></div>
      <section className="w-4/5 h-auto bg-zinc-800 py-2 px-4 flex items-center-safe justify-end-safe rounded-ss-2xl rounded-se-2xl border-b-2 border-gray-100 z-10">
        <button
          className="shadow-2xl cursor-pointer text-white font-bold bg-red-500 w-auto h-auto px-8 py-2 rounded-full"
          aria-label="Fechar o modal"
          onClick={() => {
            setOpenModal(false);
            window.location.reload();
          }}
        >
          Fechar
        </button>
      </section>
      <iframe
        src={url}
        title={title}
        width="80%"
        height="80%"
        allowFullScreen
        className="z-10"
      ></iframe>
      <p className="text-start flex items-center-safe justify-center-safe text-sm text-zinc-800 gap-1 bg-white z-10 w-4/5 py-2">
        <TriangleAlert color="#fd2626" size={16} />
        <span className="text-red-500 font-semibold text-base">Atenção:</span>
        Após finalizar os termos de aceite, você já poderá fechar essa janela.
        Pode levar <strong>alguns minutos</strong> para os seus dados serem
        aprovados.
      </p>
    </main>
  );
}

export default Iframe;
