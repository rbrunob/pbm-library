import { ILinkHref } from "../../../types/globals";
import classNames from "classnames";
import React from "react";

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  href: ILinkHref | string;
}

function Link(props: LinkProps) {
  const getParams = (
    params: { [key: string]: string | number } | undefined
  ) => {
    if (params === undefined) return "";

    return (
      "?" +
      Object.keys(params)
        .map((paramter) => paramter + "=" + params[paramter])
        .join("&")
    );
  };

  return (
    <a
      {...props}
      target="_blank"
      href={
        typeof props.href === "string"
          ? props.href
          : props.href.pathname + getParams(props.href.param)
      }
      className={classNames(
        "w-3xs cursor-pointer h-10 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors flex items-center-safe justify-center-safe",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}

export default Link;
