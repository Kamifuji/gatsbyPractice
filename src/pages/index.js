import React from "react"
import { Global, css } from "@emotion/core"
import Header from "./component/header"
import Cemetery from "./component/cemetery"
import Button from "./component/button"
import Fotter from "./component/fotter"
import { globalStyle } from "./component/globalStyle"
import kvImg from "./kvBg.jpg"

const kv = css`
  width: 100%;
  padding: 12px;
  background: url(${kvImg});
  background-size: cover;
  font-weight: bold;
  text-align: center;
`
const kvInner = css`
  padding: 32px 8px 28px;
  background-color: rgba(252, 252, 252, 0.8);
  border-radius: 8px;
  text-align: center;
`
const subCopy = css`
  font-size: 16px;
  margin-bottom: 8px;
`
const mainCopy = css`
  font-size: 28px;
  margin-bottom: 20px;
`
const headerCopy = css`
  font-size: 20px;
  font-weight: bold;
  padding: 32px 0;
  text-align: center;
`
const troubleList = css`
  position: relative;
  padding: 12px;
  background: #d3cdc5;
  margin-bottom: 40px;
  &::after {
    position: absolute;
    bottom: -39px;
    left: 50%;
    width: 0;
    height: 0;
    border-color: #d3cdc5 transparent transparent;
    border-style: solid;
    border-width: 40px 190px 0;
    transform: translateX(-50%);
    content: "";
  }
`
const troubleListItem = css`
  position: relative;
  background: #fff;
  border-radius: 50px;
  text-align: center;
  margin: 24px 0;
  padding: 8px;
  border: 2px solid #766957;
`
const middleHeader = css`
  position: relative;
  padding: 32px 0 12px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  &:before {
    position: absolute;
    bottom: 20%;
    left: 10%;
    width: 2px;
    height: 50%;
    background-color: #3d3529;
    transform: rotate(-30deg);
    content: "";
  }
  &:after {
    position: absolute;
    bottom: 20%;
    right: 10%;
    width: 2px;
    height: 50%;
    background-color: #3d3529;
    transform: rotate(30deg);
    content: "";
  }
`
const cemeteryIntroductions = css`
  padding: 24px 12px 32px;
  background: #fffaf1;
  border-bottom: 2px solid #eae7e2;
`
const cemeteryIntroductionsHeader = css`
  margin-bottom: 16px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  &:after {
    display: block;
    padding-top: 8px;
    width: 24px;
    border-bottom: 4px solid #be7e00;
    margin: auto;
    content: "";
  }
`
const serviceMeritBalloon = css`
  position: relative;
  width: 84%;
  margin: 0 auto 24px;
  padding: 46px 20px;
  background-color: #fff;
  border-radius: 48%;
  border: 1px solid #9f6a00;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`
const serviceMeritDescription = css`
  margin-bottom: 24px;
  padding: 12px;
  background: #fff;
  border: 4px solid #d3cdc5;
`
const reasonContent = css`
  padding: 32px 12px;
  border-bottom: 2px solid #eae7e2;
  color: #3d3529;
`
const reasonHeader = css`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 32px;
  text-align: center;
`
const featureList = css`
  counter-reset: number;
`
const featureListItem = css`
  margin-bottom: 32px;
`
const featureListHeader = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  position: relative;
  margin-bottom: 12px;
  padding-left: 2em;
  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 1.4em;
    font-weight: 700;
    color: #fff;
    text-align: center;
    background: #9f6a00;
    border-radius: 50%;
    transform: translateY(-50%);
    counter-increment: number;
    content: counter(number);
  }
`
const flowList = css`
  counter-reset: number;
`
const flowListItem = css`
  display: flex;
  margin-bottom: 16px;
`

const flowListText = css`
  margin-left: 12px;
  margin-bottom: 20px;
`
const flowListHeader = css`
  position: relative;
  padding-left: 4em;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    padding: 4px 8px;
    font-size: 12px;
    background: #9f6a00;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    transform: translateY(-50%);
    counter-increment: number;
    content: "STEP." counter(number);
  }
`
const flowListDescription = css`
  font-size: 14px;
`

export default function Home() {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <section css={kv}>
        <div css={kvInner}>
          <p css={subCopy}>
            全国 取り扱い霊園数
            <br />
            8700件以上！
          </p>
          <h1 css={mainCopy}>カンタン情報収集</h1>
          <Button />
        </div>
      </section>
      <section>
        <p css={headerCopy}>
          お墓・霊園さがしに
          <br />
          こんなお悩みありませんか？
        </p>
        <ul css={troubleList}>
          <li css={troubleListItem}>情報収集にかける時間がない</li>
          <li css={troubleListItem}>霊園の数が多すぎて探し方がわからない</li>
          <li css={troubleListItem}>自分にぴったりなお墓がわからない</li>
        </ul>
        <h4 css={middleHeader}>
          ライフドットの霊園紹介で
          <br />
          そのお悩みを解決 !
        </h4>
      </section>
      <section css={cemeteryIntroductions}>
        <h4 css={cemeteryIntroductionsHeader}>
          例えば
          <br />
          こんな霊園をご紹介します
        </h4>
        <Cemetery />
        <Cemetery />
        <p css={serviceMeritBalloon}>
          他にも多数の霊園情報を
          <br />
          取り揃えています
        </p>
        <div css={serviceMeritDescription}>
          ライフドットは取り扱い霊園数8,700件以上の中からあなたの希望に合った霊園をプロの目線で提案いたします。
          <br />
          ご利用は完全無料。
          <br />
          まずはお気軽にお問い合わせください。
        </div>
        <Button />
      </section>
      <section css={reasonContent}>
        <h4 css={reasonHeader}>
          ライフドットが選ばれる
          <br />
          ３つの理由
        </h4>
        <ul css={featureList}>
          <li css={featureListItem}>
            <h5 css={featureListHeader}>全国8,700件以上の霊園を紹介</h5>
            <img src="" alt="" />
            <p>
              一般墓や樹木葬、納骨堂、永代供養など、様々な供養形態の霊園墓地、全国8,700件以上の中から条件に合う霊園墓地を紹介致します。
            </p>
          </li>
          <li css={featureListItem}>
            <h5 css={featureListHeader}>
              霊園・墓地紹介のプロがあなたのお悩みに対応
            </h5>
            <img src="" alt="" />
            <p>
              お墓ディレクターや終活カウンセラーをもつスタッフが常駐し、後悔のないお墓探しができるように、中立的な立場からしっかりとサポート！
            </p>
          </li>
        </ul>
        <Button />
      </section>
      <section css={reasonContent}>
        <h4 css={reasonHeader}>
          サービスのご利用は
          <br />
          カンタン3STEP
        </h4>
        <ul css={flowList}>
          <li css={flowListItem}>
            <img src="" alt="" />
            <div css={flowListText}>
              <h5 css={flowListHeader}>ご希望条件を入力</h5>
              <p css={flowListDescription}>
                お墓を建てたいエリア・希望条件などをご入力いただきます。
              </p>
            </div>
          </li>
          <li css={flowListItem}>
            <img src="" alt="" />
            <div css={flowListText}>
              <h5 css={flowListHeader}>プロが選ぶ</h5>
              <p css={flowListDescription}>
                いただいた条件を踏まえ、あなたにぴったりの霊園・墓地をお選びいたします。
              </p>
            </div>
          </li>
        </ul>
        <Button />
      </section>
      <Fotter />
    </>
  )
}
