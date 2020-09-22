import React from "react"
import { css } from "@emotion/core"

const footer = css`
  background: #eae7e2;
  color: #3d3529;
`
const footerTop = css`
  padding: 0 10px 20px;
`
const footerTopSection = css`
  padding: 20px 0 10px;
  max-width: 1080px;
  margin: 0 auto;
  font-size: 14px;
`
const footerNavList = css`
  display: inline-block;
  margin: 0 8px 0 2px;
  line-height: 24px;
  a {
    color: #3d3529;
  }
`
const footerBottom = css`
  width: 100%;
  padding: 0;
  background: #333;
  margin: 0;
`
const footerBottomCopy = css`
  text-align: center;
  padding: 15px 10px;
  font-size: 12px;
  color: #fff;
  margin-bottom: 0;
`

export default function Home() {
  return (
    <footer css={footer}>
      <div css={footerTop}>
        <nav css={footerTopSection}>
          <ul>
            <li css={footerNavList}>
              <a href="https://www.lifedot.jp/company_info/">運営者情報</a>
            </li>
            <li css={footerNavList}>
              <a href="https://www.lifedot.jp/agreement/">利用規約</a>
            </li>
            <li css={footerNavList}>
              <a
                href="https://life.a-tm.co.jp/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                プライバシーポリシー
              </a>
            </li>
            <li css={footerNavList}>
              <a href="https://www.lifedot.jp/contacts/new/">お問い合わせ</a>
            </li>
            <li css={footerNavList}>
              <a href="https://www.lifedot.jp/smap/">サイトマップ</a>
            </li>
            <li css={footerNavList}>
              <a href="https://www.lifedot.jp/faq/">よくある質問</a>
            </li>
            <li css={footerNavList}>
              <a href="https://www.lifedot.jp/words/">用語集</a>
            </li>
          </ul>
        </nav>
      </div>
      <div css={footerBottom}>
        <p css={footerBottomCopy}>
          &copy; 2017-2020 お墓・霊園探しならライフドット
        </p>
      </div>
    </footer>
  )
}
