import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  children: React.ReactNode;
}

function Title(props: TitleProps) {
  return (
    <h2
      className={classNames(
        "text-start font-semibold text-sm",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
}

export default Title;
