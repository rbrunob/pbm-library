import React from "react";

function Footer() {
  return (
    <footer className="w-full h-auto relative">
      <section className="flex items-center-safe justify-center-safe w-full h-auto gap-4">
        <section className="w-4/5 h-auto">
          <h4 className="text-start font-semibold text-sm">
            Economize com o benefício do laboratório.
          </h4>
          <p className="text-start font-normal text-sm">
            Este produto tem preço exclusivo para clientes cadastrados no
            programa.
          </p>
        </section>
        <img
          src="/partners/logo-parceiro-exemplo.jpeg"
          alt="parceiro exemplo estático"
          className="w-1/5 h-auto aspect-square"
          loading="eager"
        />
      </section>
    </footer>
  );
}

export default Footer;
