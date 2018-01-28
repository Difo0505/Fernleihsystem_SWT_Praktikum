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
        {/* <Row> */}
        {/* <Col sm={12} md={12} lg={12}> */}
        <div>
          <Parallax imageSrc={image1} />
          <div className="section white">
            <div className="row container">
              <h2 className="header">Welcome</h2>

              <p className="grey-text text-darken-3 lighten-3">
                Professor Dr. Karl Nickel (1924-2009) had been a Professor at
                Karlsruhe University since 1962 and was active from 1996 to 1989
                with his research group in Freiburg university. At that time he
                was one of the leader researchers of interval Mathematics in
                Germany. All systematic Literature on Interval Mathematics were
                first available in his Institut in Karlsruhe then later in
                Freiburg. It resulted in the creation of the so-called Freiburg
                Interval Library that contains today more than 2000 publications
                that have been collected by Jügern Garloff up until 1987. This
                Library was later moved by Prof. Helmut Ratschek to the
                Mathematics Institute of Düsseldorf University and continued to
                be looked after there. After Prof. Ratschek's retirement in
                2006, the library was transported by Prof.Dr. Walter Krämer to
                the Bergische University of Wuppertal. The wuppertal University
                became then a place where the entirety of the library's
                collections could be kept. Several researcher worldwide are
                thankful to Interval library of Freiburg for giving them the
                opportunity to get hold of publications from the early days of
                interval mathematics that would have been otherwise difficult to
                find or would no longer exist.
              </p>
            </div>
          </div>
          <Parallax imageSrc={image2} />
        </div>
        {/* </Col> */}
        {/* <Col sm={12} md={4} lg={4}>
            <SearchHome />
          </Col> */}
        {/* </Row> */}
      </div>
    );
  }
}
export default Home;
