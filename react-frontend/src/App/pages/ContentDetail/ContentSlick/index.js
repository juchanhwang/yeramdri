import React, { Component } from "react";
import Slider from "react-slick";
import ArrowButton from 'src/components/ArrowButton';
import classnames from "classnames/bind";
import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "ContentSlick";

class ContentSlick extends Component {
  _renderMultiMedia = multiMedia => {
    return multiMedia.map(({ type, url }) => {
      switch (type) {
        case "img":
          return <img src={url} alt="mediaImg" key={url} />;
        case "video":
          return (
            <iframe
                className={cx(`${moduleName}-video`)}
                key={url}
                title="contentVideo"
                src={`${url}?controls=2&showinfo=0&modestbranding=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
          );
        default:
          return null;
      }
    });
  };

  render() {
    const { multiMedia } = this.props;
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      speed: 500,
      infinite: false,
      lazyLoad: true,
      nextArrow: <ArrowButton btnStyle={{ position: 'absolute', right: 12, top: '45%' }} direction="right" />,
      prevArrow: <ArrowButton btnStyle={{ position: 'absolute', left: 12, top: '45%', zIndex: 100 }} />
    };
    return (
      <div className={cx(moduleName)}>
        <Slider {...settings}>{this._renderMultiMedia(multiMedia)}</Slider>
      </div>
    );
  }
}

export default ContentSlick;
