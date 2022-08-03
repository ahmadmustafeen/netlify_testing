import React from "react";
import { AppButtonProps } from "../interfaces";




const AppButton = (props: AppButtonProps) => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

export {AppButton};
