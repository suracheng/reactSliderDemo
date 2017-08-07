import React, {Component} from 'react';

export default class SliderItems extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setSliders(this.refs.sliders);
    }
    render () {
        let style = {
            width: (this.props.images.length+1) * 600,
            left : this.props.index * -600 + 'px',
            transitionDuration: this.props.speed + 's'
        };
        return (
            <ul className='sliders' style={style} ref='sliders'>
                {
                    this.props.images.map((image,index) => (

                        <li className='slider' key={index}>
                            <img src={image.src}/>
                        </li>
                    ))
                }
                <li className='slider' key={this.props.images.length}>
                    <img src={this.props.images[0].src}/>
                </li>
            </ul>
        )
    }
}
