function Loading() {
  return (
    <main className="flex items-center justify-center gap-4">
      <div className="w-8 h-8 border-4 border-t-gray-700 border-gray-300 rounded-full animate-spin"></div>
      <p className="text-sm text-zinc-900 font-semibold text-start">
        Um momento... estamos verificando seus dados.
      </p>
    </main>
  );
}

export default Loading;
