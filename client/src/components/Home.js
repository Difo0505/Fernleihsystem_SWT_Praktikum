import React, { Component } from "react";

import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import { Row, Col, Container } from "react-grid-system";
import { Parallax } from "react-materialize";
import SearchHome from "./SearchHome";
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
                  <h2 className="header">Welcome</h2>

                  <p className="grey-text text-darken-3 lighten-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti itaque quasi impedit enim doloribus cumque illum
                    recusandae voluptatum. Eius error corporis fugiat temporibus
                    hic quod eveniet nam possimus aliquid! Facere enim doloribus
                    sunt reprehenderit distinctio tempore inventore ratione!
                    Earum, iusto adipisci non dignissimos delectus eveniet
                    facere nihil temporibus explicabo deserunt molestias
                    praesentium, quidem, est eos distinctio laboriosam corrupti
                    ab amet pariatur officia dolorum recusandae veniam ducimus
                    nostrum! Cupiditate odio, veniam accusantium ducimus ea in!
                    Suscipit sequi similique beatae maxime, magni ea minima? Ad
                    facilis tempore minus odit accusantium, rem facere quae,
                    quod voluptas omnis nulla, est similique? Voluptatum amet
                    aut, adipisci culpa officiis fugiat quis blanditiis
                    voluptatem. Nemo recusandae consectetur ad aperiam
                    cupiditate libero maiores nam deserunt, doloremque facilis
                    veniam obcaecati vitae quis illum. Quas animi, eligendi
                    dolor quod. Ut animi et saepe veritatis, in sint officiis
                    voluptas iste itaque eos alias, rerum vel, quidem mollitia,
                    dolorem nesciunt illo! Et!
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
