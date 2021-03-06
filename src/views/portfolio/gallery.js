import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import "lightgallery.js/dist/css/lightgallery.css";

const images = [
  [
    require("../../assets/img/work/boosey.png"),
   "Boosey & Hawkes",
   "https://www.boosey.com/"
  ],
  [
    require("../../assets/img/work/cf_source.png"),
   "CF Source",
   "https://www.cfsourcehcp.com/"
  ],
  [
    require("../../assets/img/work/first_aid_champions.png"),
    "First aid champions",
    "https://firstaidchampions.redcross.org.uk/"
  ],
  [
    require("../../assets/img/work/design_library.png"),
    "BRC Design Library",
    "https://britishredcrosssociety.github.io/design-library/"
  ],
  [
    require("../../assets/img/work/ipo.png"),
    "Intellectual property office",
    "https://www.ipo.gov.uk/ip-support/"
  ],
  [
    require("../../assets/img/work/lcm.png"),
    "LCM",
   "https://www.ipo.gov.uk/ip-support/"

  ],
  [ 
    require("../../assets/img/work/somerset_house.png"),
    "Somerset house",
    "https://www.somersethouse.org.uk/"

  ],
  [
    require("../../assets/img/work/stories.png"),
    "British Rec Cross stories",
    "https://www.redcross.org.uk/stories"
  ],
  [
    require("../../assets/img/work/heineken.png"),
    "Heineken Sustainability Report 2012",
    "http://www.annualreports.com/Company/heineken-nv"
  ],
  [
    require("../../assets/img/work/vertex.png"),
    "Vertex",
    "https://www.vrtx.com/"
  ],
  [
    require("../../assets/img/work/wpp.png"),
    "WPP Annual Report 2012",
    "http://www.annualreports.co.uk/Company/wpp-group-plc/"
  ],
  [
    require("../../assets/img/work/wpp_2.png"),
    "WPP Sustainability Report 2012",
    "https://www.wpp.com/sustainability/sustainability-report-2018"
  ]
];

const PhotoItem = ({ image, group, text, link, subHtml }) => (
  <Col sm={4} md={3} lg={3} className="gallery-item">
    <LightgalleryItem group={group} src={image} subHtml={text}>
      <div className="mask">
        <span className="mask-desc h4">{text}</span>
        <a className="mask-link" href={link} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon
          icon={faLink} /></a>
      </div>
        <img src={image} alt={image} style={{ width: "100%" }} />   
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
                    link={p[2]}
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