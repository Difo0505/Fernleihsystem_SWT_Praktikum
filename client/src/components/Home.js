import React, { Component } from 'react';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import { Row, Col, Container } from 'react-grid-system';
import { Parallax } from 'react-materialize';
import SearchHome from './SearchHome';
class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={8} lg={8}>
            <div>
              <Parallax imageSrc={image1} />
              <div className="section white">
                <div className="row container">
                  <h2 className="header">Parallax</h2>
                  <p className="grey-text text-darken-3 lighten-3">
                    Parallax is an effect where the background content or image
                    in this case, is moved at a different speed than the
                    foreground content while scrolling.
                  </p>
                </div>
              </div>
              <Parallax imageSrc={image2} />
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <SearchHome />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Home;
