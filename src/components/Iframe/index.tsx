import React from "react";

function Iframe({ url, title }: { url: string; title: string }) {
  return (
    <main className="w-4/5 h-4/5 relative bg-white rounded-2xl">
      <iframe
        src={url}
        title={title}
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </main>
  );
}

export default Iframe;
