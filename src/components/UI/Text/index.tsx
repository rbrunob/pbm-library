import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

function Text(props: TextProps) {
  return (
    <p
      className={classNames("text-start font-normal text-sm", props.className)}
    >
      {props.children}
    </p>
  );
}

export default Text;
