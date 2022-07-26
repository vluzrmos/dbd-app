import * as _strval from "lodash/toString";

export const strval = _strval;
export const nl2br = (str) =>
  strval(str).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br/>$2");

export const splitLines = (str) => strval(str).split(/(\r\n|\n\r|\r|\n)/);

export const linesToHtmlParagraphs = (str) => splitLines(str).map((text) => `<p>${text}</p>`).join("")
