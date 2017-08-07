import React, {Component} from 'react';
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrow";
import SliderDots from "./SliderDots";


export default class Slider extends Component {
    constructor () {
        super();
        this.state = { index : 0, isMoving: false }

    }

    // 表示 移动 index step 步长
    turn = (step) => {
        // 用当前的索引加上 步长 得到新的值
        if (!this.state.isMoving) {
            this.setState({isMoving: true});
            let index = this.state.index + step;
            if (index > this.props.images.length ) {
                this.sliders.style.transitionDuration = '0s';
                this.sliders.style.left = 0;
                index  = 1;
                getComputedStyle(this.sliders, null).left;
                this.sliders.style.transitionDuration = this.props.speed + 's';
                this.setState({ index });
                setTimeout(()=> {
                    this.setState({isMoving : false});
                }, this.props.speed * 1000);
                return;
            } else if (index < 0) {
                this.sliders.style.transitionDuration = '0s';
                this.sliders.style.left = -600 * this.props.images.length + 'px';
                getComputedStyle(this.sliders, null).left;
                index = this.props.images.length - 1;
                this.sliders.style.transitionDuration = this.props.speed + 's';
                this.setState({ index });
                setTimeout(()=> {
                    this.setState({isMoving : false});
                }, this.props.speed * 1000);
                return;
            }
            this.setState({ index });
            setTimeout(()=> {
                this.setState({isMoving : false});
            }, this.props.speed * 1000);
        }
    };

    // 开始自动轮播  鼠标移上去暂停   移出来开启
    go = () => {
        this.timer = setInterval(() => {
            this.turn(-1);
        }, this.props.delay * 1000);
    };

    componentDidMount () {
        if (this.props.autoPlay) {
            this.go();
        }
    }

    setSliders = (ref) => {
        this.sliders = ref;
    };

    render() {
        return (
            <div className='slider-wrapper'
                 onMouseOver={()=> {clearInterval(this.timer)}}
                 onMouseOut={this.go}
            >
                <SliderItems
                    images={this.props.images}
                    index={this.state.index}
                    setSliders={this.setSliders}
                    speed={this.props.speed}
                />
                {this.props.arrow ? <SliderArrows turn={this.turn}/> : null}
                {this.props.dots ? <SliderDots images={this.props.images} turn={this.turn} index={this.state.index}/> : null}
            </div>
        )
    }
}
import './slider.less';

