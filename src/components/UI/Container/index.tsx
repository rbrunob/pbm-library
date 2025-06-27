import classNames from "classnames";
import React from "react";

function Container({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "simple" | "main";
}) {
  return (
    <main
      className={classNames({
        "flex flex-col items-center-safe justify-center-safe min-w-[var(--min-container)] max-w-[var(--max-container)] w-full h-auto rounded-2xl p-4 bg-gray-100 gap-4":
          variant === "main",
        "w-full h-auto relative": variant === "simple",
      })}
      data-testid="test_id_container"
      data-variant={variant}
    >
      {children}
    </main>
  );
}

export default Container;
