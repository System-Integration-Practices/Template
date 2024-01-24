import React from "react";
import styled, { css } from "styled-components";

const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 157.143%;
  color: #fff;
  background-color: #796eff;
  border-radius: 5px;
  border: 1px solid transparent;
  ${(props) =>
    props.outline &&
    css`
      border-color: ${(props) => props.borderColor};
      background-color: transparent;
      color: #5f666f;
    `};
  ${(props) =>
    props.secondary2 &&
    css`
      background-color: #ff5263;
    `};
  ${(props) =>
    props.tertiary &&
    css`
      background-color: #ffa900;
    `};
  ${(props) =>
    props.secondary &&
    css`
      background-color: #23a9f9;
    `};
  ${(props) =>
    props.icon &&
    css`
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
