export type TOpenWebview = (linkPromise: Promise<string>, extrac?: string) => void;

/**
 * @description 新开窗口：防止异步窗口新开被拦截
 * @param linkPromise 获取新开窗口地址
 * @param extrac 访问路径额外配置
 * @returns
 */
const openWebview: TOpenWebview = async (linkPromise, extrac) => {
  const newWindow = window.open();
  if (newWindow) {
    try {
      const link = await linkPromise;
      newWindow.location.href = link + (extrac || '');
    } catch (err: any) {
      newWindow.close();
    }
  } else {
    throw new Error('window 对象不存在');
  }
};

export default openWebview;
