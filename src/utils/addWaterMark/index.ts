import { CSSProperties } from 'react';

export interface addWaterMarkProps {
  content?: string | string[];
  width?: string;
  height?: string;
  textAlign?: CSSProperties['textAlign'];
  font?: string;
  fillStyle?: CSSProperties['color'];
}

export type TAddWaterMark = (params: addWaterMarkProps) => void;

/**
 * @description 添加水印
 * @param delay 延迟时间（单位：毫秒）
 * @returns
 */
const addWaterMark: TAddWaterMark = (props) => {
  const {
    content = '',
    width = '300px',
    height = '200px',
    textAlign = 'left',
    font = '15px Microsoft Yahei',
    fillStyle = 'rgba(184, 184, 184, 0.3)',
  } = props || {};

  const container = document.body;
  const preWatermarkDiv = document.querySelector('#_watermarkDiv');
  if (preWatermarkDiv) {
    container.removeChild(preWatermarkDiv);
  }
  const canvas = document.createElement('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  const ctx: any = canvas.getContext('2d');

  ctx.textAlign = textAlign;
  ctx.textBaseline = 'middle';
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate((Math.PI / 180) * 335);
  if (Array.isArray(content)) {
    content.forEach((item, index) => {
      const extracHeight = index * 20 - 10;
      ctx.fillText(item, 10, parseFloat(height) + extracHeight);
    });
  } else {
    ctx.fillText(content, 10, parseFloat(height) - 10);
  }

  const base64Url = canvas.toDataURL();

  const watermarkDiv = document.createElement('div');
  const styleStr = `
                  position:fixed;
                  top:0;
                  left:0;
                  width:100%;
                  height:calc(100% - 50px);
                  z-index:999;
                  pointer-events:none;
                  background-repeat:repeat;
                  background-image:url('${base64Url}')`;

  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.id = '_watermarkDiv';

  container.style.position = 'relative';
  container.insertBefore(watermarkDiv, container.firstChild);
};

export default addWaterMark;
