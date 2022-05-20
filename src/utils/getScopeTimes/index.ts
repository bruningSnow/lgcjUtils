import moment, { Moment } from 'moment';

interface getScopeTimesProps {
  type: 'day' | 'week' | 'month' | 'quarter' | 'year';
  i?: number;
}

export type TGetScopeTimes = (params: getScopeTimesProps) => [Moment, Moment];

function setStartDate(mIns: Moment) {
  return mIns.hour(0).minute(0).second(0);
}

function setEndDate(mIns: Moment) {
  return mIns.hour(23).minutes(59).seconds(59);
}

/**
 * @description 获取前 x 日/周/月/季/年 的开始及结束时间
 * @param type 时间区类型
 * @param i 前 x
 * @returns
 */
const getScopeTimes: TGetScopeTimes = (params) => {
  const { type, i = 0 } = params;
  const currentMoment = moment()[type]();
  const firstMoment = (moment()[type](currentMoment - i) as Moment).startOf(type);
  const endMoment = (moment()[type](currentMoment - i) as Moment).endOf(type);

  return [setStartDate(firstMoment), setEndDate(endMoment)];
};

export default getScopeTimes;
