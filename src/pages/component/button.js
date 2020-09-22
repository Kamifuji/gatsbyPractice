import React from "react"
import { css } from "@emotion/core"

const ctaBtn = css`
  position: relative;
  display: block;
  margin: auto;
  padding: 12px 8px 12px 20px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-decoration: none !important;
  border-radius: 4px;
  background-color: #70ba2c;
  box-shadow: 0 4px 0 #41a233;
  transition: all 0.15s cubic-bezier(0, 0, 0.4, 1);
  cursor: pointer;
  width: 90%;
  &:before {
    content: "無 料";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    writing-mode: vertical-rl;
    font-size: 14px;
    color: #fff;
    background: #41a233;
    border-radius: 4px 0 0 4px;
  }
`

export default function Home() {
  return (
    <a href="/" css={ctaBtn}>
      霊園のパンフレットをもらう
    </a>
  )
}
