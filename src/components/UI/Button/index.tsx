import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "w-3xs cursor-pointer h-10 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
