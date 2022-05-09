import checkDataType from '../checkDataType';

export interface arrayFlatProps {
  data: any[];
  cb?: (value: any) => any;
}

export type TArrayFlat = (params: arrayFlatProps) => any[];

/**
 * @description 多维数组拉平【维度未知】
 * @param data 需要拉平数组
 * @param cb 数组拉平遍历时，对单元值改造函数
 * @returns
 */
const arrayFlat: TArrayFlat = (params) => {
  const { data, cb } = params;

  if (!checkDataType({ data, type: 'Array' })) {
    return data;
  }

  return data.reduce((pre: any[], item: any) => {
    if (Array.isArray(item)) {
      return [...pre, ...arrayFlat({ data: item, cb })];
    }
    pre.push(cb ? cb(item) : item);
    return pre;
  }, []);
};

export default arrayFlat;
