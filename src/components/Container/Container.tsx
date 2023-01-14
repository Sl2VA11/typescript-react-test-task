import React from "react";
import styled from "./Container.module.scss";
interface Props {
  children: React.ReactNode;
}
export const Container = ({ children }: Props) => {
  return <div className={styled.container}>{children}</div>;
};
