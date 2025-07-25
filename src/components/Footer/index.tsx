function Footer({ industryLogo }: { industryLogo: string }) {
  return (
    <footer className="w-full h-auto relative" id="footer_pbm">
      <section className="flex items-center justify-center w-full h-auto gap-4">
        <section className="w-4/5 h-auto">
          <h3 className="text-start font-semibold text-sm">
            Economize com o benefício do laboratório.
          </h3>
          <p className="text-start font-normal text-sm">
            Este produto tem preço exclusivo para clientes cadastrados no
            programa.
          </p>
        </section>
        <img
          src={industryLogo}
          alt="parceiro"
          className="w-1/5 min-w-20 h-auto aspect-square"
          loading="eager"
          id="footer_industry_logo_pbm"
        />
      </section>
    </footer>
  );
}

export default Footer;
