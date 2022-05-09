export interface hexToRgbWidthOpProps {
  hexColor: string;
  opacity?: number;
}

export type THexToRgbWidthOp = (params: hexToRgbWidthOpProps) => string;

const repairHex = (hex: string) => {
  let innerHex = hex.replace(/#/, '');

  if (innerHex.length === 3) {
    let tmp = '';
    for (let i = 0; i < 3; i++) {
      const currentStr = innerHex.charAt(i);
      tmp = tmp + currentStr + currentStr;
    }
    innerHex = tmp;
  }

  return innerHex;
};

/**
 * @description hex（十六进制） 转成 十进制 ragb 【parseInt】
 * @param hexColor 十六进制色值 #fff/#ffffff
 * @param opacity 透明度
 * @returns
 */
const hexToRgbWidthOp: THexToRgbWidthOp = (params) => {
  const { hexColor, opacity = 1 } = params;
  const innerHex = repairHex(hexColor);
  const rgb = [];

  for (let i = 0; i < 3; i++) {
    const currentHex = `0x${innerHex.slice(i * 2, i * 2 + 2)}`;
    rgb.push(parseInt(currentHex, 16));
  }

  return `rgba(${rgb.join(',')}, ${opacity})`;
};

export default hexToRgbWidthOp;
