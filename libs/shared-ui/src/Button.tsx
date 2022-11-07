import React from "react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={() => onClick()}>{children}</button>;
};
