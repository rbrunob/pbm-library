import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  textColor?: string;
  textSize?: string;
}

function Text(props: TextProps) {
  return (
    <p
      className={classNames(
        "text-start font-normal text-sm text-zinc-900",
        props.className
      )}
      style={{ color: props.textColor, fontSize: props.textSize }}
      data-testid="test_id_text"
    >
      {props.children}
    </p>
  );
}

export default Text;
