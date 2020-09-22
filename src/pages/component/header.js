import React from "react"
import { css } from '@emotion/core'
import logo from './logo.png'

const header = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-top: 4px solid #ffc758;
`
const headerlogo = css`
  width: 130px;
`
const telephone = css`
  font-weight: bold;
`
const telephoneCopy = css`
  font-size: 12px;
`
const telephoneNumber = css`
  color: #41a233;
`

export default function Home() {
  return (
    <header css={header}>
      <p css={headerlogo}>
        <img src={logo} alt="ライフドット" />
      </p>
      <div css={telephone}>
        <p css={telephoneCopy}>資料請求・見学予約受付中</p>
        <a href="/" css={telephoneNumber}>
          0120-907-802
        </a>
      </div>
    </header>
  );
}