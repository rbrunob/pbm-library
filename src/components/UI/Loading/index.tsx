interface LoadingProps {
  textColor?: string;
}

function Loading({ textColor }: LoadingProps) {
  return (
    <main className="flex items-center justify-center gap-4" id="loading_pbm">
      <div
        data-testid="test_id_spin"
        className="w-8 h-8 border-4 border-t-gray-700 border-gray-300 rounded-full animate-spin"
      ></div>
      <p
        className={"text-sm font-semibold text-start text-zinc-900"}
        style={{ color: textColor }}
      >
        Um momento... estamos verificando seus dados.
      </p>
    </main>
  );
}

export default Loading;
