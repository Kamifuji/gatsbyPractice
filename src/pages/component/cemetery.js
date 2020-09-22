import React from "react"
import { css } from "@emotion/core"
import cemeteryPhoto from "./cemeteryPhoto.jpg"
import Button from "./button"

const cemeteryCassette = css`
  margin-bottom: 24px;
  background: #fff;
  border: 1px solid #d3cdc5;
  border-radius: 4px;
`
const cemeteryCassetteHeader = css`
  padding: 8px;
  background: #eae7e2;
  border-radius: 4px 4px 0 0;
`
const name = css`
  display: block;
  font-size: 18px;
  font-weight: 700;
`
const category = css`
  display: block;
  font-size: 14px;
  font-weight: 700;
`
const photo = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
const cemeteryCassetteBody = css`
  padding: 8px 12px 24px;
`
const review = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: #766957;
  background: #f4f3f1;
  border-radius: 4px;
`
const reviewTitle = css`
  margin-right: 12px;
  font-weight: 700;
`
const access = css`
  font-weight: 700;
  margin-bottom: 4px;
  font-size: 14px;
`
const price = css`
  margin-bottom: 8px;
  font-size: 14px;
`
const priceNumber = css`
  color: #e1394d;
  font-weight: 700;
  font-size: 16px;
`
const recommendPointList = css`
  margin-bottom: 12px;
  padding: 12px;
  background: #fffaf1;
`
const recommendPointListItem = css`
  position: relative;
  padding-left: 24px;
  font-weight: 700;
  font-size: 16px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 40%;
    left: 0;
    width: 12px;
    height: 6px;
    border-left: 4px solid #ffc758;
    border-bottom: 4px solid #ffc758;
    transform: translateY(-40%) rotate(-45deg);
  }
`
const characteristicLabelList = css`
  margin-bottom: 20px;
`
const characteristicLabelListItem = css`
  display: inline-block;
  margin: 0 4px 4px 0;
  padding: 0 12px;
  color: #be7e00;
  border: 1px solid #9f6a00;
  border-radius: 4px;
  font-size: 12px;
`

export default function Home() {
  return (
    <article css={cemeteryCassette}>
      <h5 css={cemeteryCassetteHeader}>
        <span css={name}>青山霊園</span>
        <span css={category}>公営霊園 | 宗教不問</span>
      </h5>
      <div>
        <img css={photo} src={cemeteryPhoto} alt="" />
      </div>
      <section css={cemeteryCassetteBody}>
        <div css={review}>
          <span css={reviewTitle}>みんなの評価</span>
          ☆☆☆☆☆ 5.0
        </div>
        <ul css={access}>
          <li>東京都港区南青山2-32-2</li>
          <li>
            最寄り駅:外苑前駅
            <small>(526m)</small>
          </li>
        </ul>
        <div css={price}>
          購入価格:
          <span css={priceNumber}>645</span>
          万円〜
        </div>
        <div>
          <ul css={recommendPointList}>
            <li css={recommendPointListItem}>都内有数の花見スポット</li>
            <li css={recommendPointListItem}>
              地下鉄各線から抜群の交通アクセス
            </li>
            <li css={recommendPointListItem}>歴史人や著名人が数多く眠る霊園</li>
          </ul>
        </div>
        <ul css={characteristicLabelList}>
          <li css={characteristicLabelListItem}>檀家になる必要なし</li>
          <li css={characteristicLabelListItem}>ペット供養ができる</li>
        </ul>
        <Button />
      </section>
    </article>
  )
}
