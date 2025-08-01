import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  children: React.ReactNode;
  textColor?: string;
  textSize?: string;
}

function Title(props: TitleProps) {
  return (
    <h2
      className={classNames(
        "text-start font-semibold text-sm text-zinc-900",
        props.className
      )}
      style={{ color: props.textColor, fontSize: props.textSize }}
      data-testid="test_id_title"
    >
      {props.children}
    </h2>
  );
}

export default Title;
