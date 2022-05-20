export interface DownloadCrossDomainImageProps {
  url: string;
  type?: string;
  name?: string;
}
export type TDownloadCrossDomainImage = (params: DownloadCrossDomainImageProps) => void;

/**
 * @description 下载非同源在线图片
 * @param url 非同源在线图片地址
 * @param type 图片类型
 * @param name 图片名称
 */
const downloadCrossDomainImage: TDownloadCrossDomainImage = (props) => {
  const { url, type, name } = props;
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    canvas.toBlob((blob) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob as Blob);
      link.download = name || '下载图片';
      link.click();
    }, `image/${type || 'png'}`);
  };
  img.setAttribute('crossOrigin', 'Anonymous');
  img.src = url;
};

export default downloadCrossDomainImage;
