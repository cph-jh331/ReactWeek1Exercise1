import React, { Component } from 'react';
import ImageHolder from './ImageHolder';
class Gallery extends Component {
    constructor(props) {
        super(props);
        //initial state:
        this.state =
            {
                imgs: ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'],
                img: 'images/img3.jpg'
            };
    }

    getImages = () => {
        return this.state.imgs.map(img => <img key={img} src={img} className="myImages" alt="trees" />);
    }

    setRndImage = () => {
        let rndImg = this.state.imgs[
            Math.floor(Math.random() * parseInt(this.state.imgs.length, 0))
        ];
        this.setState({ img: rndImg });
    }

    render() {
        return (
            <div className="Gallery">
                <h2>Random image</h2>
                <button onClick={this.setRndImage} className="btn btn-default"> Random image </button>
                <ImageHolder name="An image!" img={this.state.img} />
                <hr />
                <h2>All images </h2>
                {this.getImages()}
            </div>
        );
    }
}
export default Gallery;