import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

const IMAGES = [
    {src: require('./images/1.jpg')},
    {src: require('./images/2.jpg')},
    {src: require('./images/3.jpg')}
];

ReactDOM.render(
    <Slider
        images={IMAGES}
        autoPlay={true}  // 是否自动轮播
        delay={1.5}  // 每隔多少秒轮播
        speed={1}  // 多少时间轮播一次
        arrow={true}  // 是否显示箭头导航
        dots={true}  // 是否显示角标
    />,
    document.querySelector('#root')
);

import './index.less';