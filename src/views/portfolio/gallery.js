import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Row, Col } from 'react-bootstrap'

import "lightgallery.js/dist/css/lightgallery.css";

const images = [
  [
    require("../../assets/img/work/boosey.png"),
   "image 1"
  ],
  [
    require("../../assets/img/work/cf_source.png"),
   "image 2"
  ],
  [
    require("../../assets/img/work/first_aid_champions.png"),
    "image 3"
  ],
  [
    require("../../assets/img/work/flu_facts.png"),
    "image 4"
  ],
  [
    require("../../assets/img/work/ipo.png"),
    "image 5"
  ],
  [
    require("../../assets/img/work/lcm.png"),
   "image 6"
  ],
  [ 
    require("../../assets/img/work/somerset_house.png"),
    "image 7"
  ],
  [
    require("../../assets/img/work/stories.png"),
    "image 8"
  ],
  [
    require("../../assets/img/work/vertex.png"),
    "image 9"
  ]
];

const PhotoItem = ({ image, group, text, subHtml }) => (
  <Col md={3} className="gallery-item">
    <LightgalleryItem group={group} src={image} subHtml={text}>
      <div className="mask">
        <img src={image} alt={image} style={{ width: "100%" }} />
        <p>{text}</p>
      </div>
    </LightgalleryItem>
  </Col>
);


class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
          <LightgalleryProvider
          lightgallerySettings= {
              {   download: false,
                  zoom: false,
                  fullscreen: false,
                  selector: '.gallery-item',
                  width: '1024px',
                  height: '585px',
                  keyPress: true,
                  enableSwipe: true,
                  enableDrag: true,
                  swipeThreshold: 50,
                  enableTouch: true
              }
          }
          onAfterSlide={() => {
              console.log("onAfterSlide");
          }}
          >
          <Row className="gallery-list">
                {images.map((p, idx) => (
                <PhotoItem
                    key={idx}
                    image={p[0]}
                    text={p[1]}
                    group="images"
                />
                ))}
          </Row>
          </LightgalleryProvider>
        </div>
     )
  } 
}
  
export default Gallery