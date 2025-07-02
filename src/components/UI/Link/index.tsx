import { ILinkHref } from "../../../types/globals";
import classNames from "classnames";
import React from "react";
import { getParams } from "../../../utils/getParams";

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  href: ILinkHref | string;
}

function Link(props: LinkProps) {
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
        "w-3xs cursor-pointer h-10 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors flex items-center justify-center",
        props.className
      )}
      data-testid="test_id_link"
    >
      {props.children}
    </a>
  );
}

export default Link;
