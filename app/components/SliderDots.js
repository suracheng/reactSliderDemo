import React, {Component} from 'react';


export default class SliderDots extends Component {
    render () {
        return (
            <div className='slider-dots'>
                {
                    this.props.images.map( (item, index) => (
                        <span key={index} className={"dot " +(index == this.props.index || (this.props.index == this.props.images.length && index == 0) ? 'select' : '')} onClick={() => this.props.turn(index - this.props.index)}></span>
                    ))
                }
            </div>
        )
    }
}

import './sliderDots.less';

