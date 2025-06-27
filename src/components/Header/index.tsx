function Header({ originalProductPrice }: { originalProductPrice: number }) {
  return (
    <header className="flex items-center-safe justify-between w-full p-0.5 rounded-full bg-blue-200">
      <span className="py-1 px-6 rounded-full bg-blue-500 shrink-0 text-white text-sm font-bold">
        {originalProductPrice.toLocaleString("pt-BR", {
          currency: "BRL",
          currencyDisplay: "symbol",
          currencySign: "standard",
          style: "currency",
        })}
      </span>
      <h1 className="text-center w-full text-blue-500 font-bold text-sm px-4">
        Benefício de Laboratório
      </h1>
    </header>
  );
}

export default Header;
