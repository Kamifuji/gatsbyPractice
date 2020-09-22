import { css } from '@emotion/core'

export const globalStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  caption,
  th,
  td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle;
  }
  q,
  blockquote {
    quotes: none;
  }
  q:before,
  q:after,
  blockquote:before,
  blockquote:after {
    content: '';
    content: none;
  }
  a:focus,
  a:active,
  a:hover {
    outline: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden] {
    display: none;
  }

  /* ----------------------------------------
  * text
  ---------------------------------------- */
  abbr[title] {
    border-bottom: 1px dotted;
  }
  b,
  strong {
    font-weight: bold;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, serif;
    _font-family: 'courier new', monospace;
    font-size: 1em;
    overflow-x: scroll;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  /* ----------------------------------------
  * embed
  ---------------------------------------- */
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  figure {
    margin: 0;
  }

  /* ----------------------------------------
  * form
  ---------------------------------------- */
  form {
    margin: 0;
  }
  fieldset {
    border: 1px solid #e5e5e5;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    border: 0;
    padding: 0;
    white-space: normal;
  }
  button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
  }
  button,
  input {
    line-height: normal;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'],
  .btn {
    cursor: pointer;
    -webkit-appearance: none;
  }
  button[disabled],
  input[disabled] {
    cursor: default;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type='search'] {
    -webkit-appearance: textfield;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  form textarea {
    width: 80%;
  }
  form input[type='submit']:hover,
  form button:hover {
    cursor: pointer;
  }

  /* ----------------------------------------
  * original
  ---------------------------------------- */
  body {
    font-family: 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif, fontawesome;
    color: #3d3529;
  }
`
