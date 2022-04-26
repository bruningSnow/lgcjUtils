import hexToRgbWidthOp from '../hexToRgbWidthOp';

export interface randomColorByStringProps {
  name: string;
  opacity?: number;
  colorList?: string[];
}

export type TRandomColorByString = (params: randomColorByStringProps) => string;

/**
 * @description 根据 name 中每个字符的 UTF-16 code 值总和，在 innerColorList 选取色值并转为 rgb
 * @param name
 * @param opacity
 * @param colorList
 * @returns
 */
const randomColorByString: TRandomColorByString = (params) => {
  const { name, opacity = 1, colorList } = params;
  const innerColorList = colorList || [
    '#5A8BE0',
    '#F07D7D ',
    '#8FB85F',
    '#3E9BAD',
    '#CC8E49',
    '#986ACC',
  ];
  const charCodeTotal = name.split('').reduce((total, char) => {
    return total + char.charCodeAt(0);
  }, 0);
  const index = charCodeTotal % innerColorList.length;
  return hexToRgbWidthOp({ hexColor: innerColorList[index], opacity });
};

export default randomColorByString;
