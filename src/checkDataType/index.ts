type TDataType =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Undefined'
  | 'Null'
  | 'Object'
  | 'Function'
  | 'Array'
  | 'Date'
  | 'RegExp'
  | 'Map'
  | 'Set';

export interface checkDataTypeProps {
  data: any;
  type: TDataType;
}

export type TCheckDataType = (params: checkDataTypeProps) => boolean;

/**
 * @description 检测数据类型是否与输入类型一致
 * @param params 检测数据及类型
 * @returns
 */
const checkDataType: TCheckDataType = (params) => {
  const { data, type } = params;
  return Object.prototype.toString.call(data).includes(type);
};

export default checkDataType;
