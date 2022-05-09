import checkDataType from '../checkDataType';

export interface mapObjectTypeProps {
  data: Record<string, any>;
  isDeep?: boolean;
  cb?: (value: any) => any;
}

export type TMapObjectType = (params: mapObjectTypeProps) => any;

/**
 * @description 遍历对象【可深度遍历】
 * @param data 需遍历对象
 * @param isDeep 是否进行深度递归遍历
 * @param cb 对象遍历时，对单元值改造函数
 * @returns
 */
const mapObject: TMapObjectType = (params) => {
  const { data, isDeep = false, cb } = params;
  if (!checkDataType({ data, type: 'Object' })) {
    return data;
  }

  let result: Record<string, any> = {};

  if (isDeep) {
    Object.keys(data).map((key: string) => {
      const currentValue = data[key];

      if (checkDataType({ data: currentValue, type: 'Object' })) {
        result[key] = mapObject({ ...params, data: currentValue });
      } else {
        result[key] = cb ? cb(currentValue) : currentValue;
      }
    });
  } else {
    Object.keys(data).map((key: string) => {
      const currentValue = data[key];

      result[key] = cb ? cb(currentValue) : currentValue;
    });
  }
  return result;
};

export default mapObject;
