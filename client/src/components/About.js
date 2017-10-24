import React, { Component } from "react";
import { Parallax } from "react-materialize";
import wuppertal from "../images/wuppertal.jpg";
import image2 from "../images/image2.jpeg";
class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Parallax imageSrc={wuppertal} />
          <div className="section white">
            <div className="row container">
              <h2 className="header">About</h2>
              <p className="grey-text text-darken-3 lighten-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti itaque quasi impedit enim doloribus cumque illum
                recusandae voluptatum. Eius error corporis fugiat temporibus hic
                quod eveniet nam possimus aliquid! Facere enim doloribus sunt
                reprehenderit distinctio tempore inventore ratione! Earum, iusto
                adipisci non dignissimos delectus eveniet facere nihil
                temporibus explicabo deserunt molestias praesentium, quidem, est
                eos distinctio laboriosam corrupti ab amet pariatur officia
                dolorum recusandae veniam ducimus nostrum! Cupiditate odio,
                veniam accusantium ducimus ea in! Suscipit sequi similique
                beatae maxime, magni ea minima? Ad facilis tempore minus odit
                accusantium, rem facere quae, quod voluptas omnis nulla, est
                similique? Voluptatum amet aut, adipisci culpa officiis fugiat
                quis blanditiis voluptatem. Nemo recusandae consectetur ad
                aperiam cupiditate libero maiores nam deserunt, doloremque
                facilis veniam obcaecati vitae quis illum. Quas animi, eligendi
                dolor quod. Ut animi et saepe veritatis, in sint officiis
                voluptas iste itaque eos alias, rerum vel, quidem mollitia,
                dolorem nesciunt illo! Et!
              </p>
            </div>
          </div>
          <Parallax imageSrc={image2} />
        </div>
      </div>
    );
  }
}

export default About;
