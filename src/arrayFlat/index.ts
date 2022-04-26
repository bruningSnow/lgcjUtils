export interface arrayFlatProps {
  list: any[];
  cb?: (value: any) => any;
}

export type TArrayFlat = (params: arrayFlatProps) => any[];

/**
 * @description 多维数组拉平【维度未知】
 * @param list
 * @param cb 数组拉平遍历时，对单元值改造函数
 * @returns
 */
const arrayFlat: TArrayFlat = (params) => {
  const { list, cb } = params;

  return list.reduce((pre: any[], item: any) => {
    if (Array.isArray(item)) {
      return [...pre, ...arrayFlat({ list: item, cb })];
    }
    pre.push(cb ? cb(item) : item);
    return pre;
  }, []);
};

export default arrayFlat;
