import arrayFlat from '../arrayFlat';

export interface arrayFilterRepeatProps {
  list: any[];
  isFlat?: boolean;
  cb?: (value: any) => any;
}

export type TArrayFilterRepeat = (params: arrayFilterRepeatProps) => any[];

/**
 * @description 多维数组去重【维度未知】
 * @param list
 * @param isFlat 是否拉平数组
 * @param cb 数组遍历时，对单元值改造函数
 * @returns
 */
const arrayFilterRepeat: TArrayFilterRepeat = (params) => {
  const { list, isFlat, cb } = params;
  const map = new Map();
  const result: any[] = [];
  const innerList = isFlat ? arrayFlat({ list: list }) : list;

  innerList.forEach((item) => {
    if (typeof item === 'object') {
      map.set(JSON.stringify(item), item);
    } else {
      map.set(item, item);
    }
  });

  for (let [key, value] of map) {
    const resultItem = cb ? cb(value) : value;
    result.push(resultItem);
  }

  return result;
};

export default arrayFilterRepeat;
