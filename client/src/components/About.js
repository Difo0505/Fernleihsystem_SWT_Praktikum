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
              <br />
              <h4> Die Freiburger Intervallbibliothek</h4>
              <br />
              <h6> Einige Anmerkungen von W. Hofschuster </h6>
              <p className="grey-text text-darken-3 lighten-3">
                Prof Dr. Karl Nickel (1924-2009) war ab 1962 zunächst Professor
                an der Universitat Karlsruhe und von 1976-1989 mit seiner
                Forschergruppe an der Universität Freiburg tätig. In dieser Zeit
                war er einer der führenden Forscher der Intervalmathematik in
                Deutschland. Zunächst an seinem Institut in Karlsruhe und später
                dann in Freiburg wurde alle verfügbare Literatur zur
                Intervallarithmetik systematisch gesammelt. Hieraus ist die
                sogenannte Freiburger Intervallbibliothek entstanden und enthält
                heute mehr als 2000 Veröffentlichungen, die bis zum Jahre 1987
                von Jürgen Garloff in Freiburg zusammen getragen wurden. Diese
                Bibliothek wurde später von Prof. Helmut Ratschek am
                Mathematischen Institut der Universität Düsseldorf übernommen
                und dort weiter betreut. Nach dem Eintritt in den Ruhestand von
                Herrn Ratschek im Jahre 2006 wurde die Bibliothek vom Prof. Dr.
                Walter Krämer an die Bergische Universität Wuppertal geholt und
                hat hier einen Ort gefunden, an dem sie in ihrer Gesamtheit
                bewahrt werden konnte. Mehrere Forscherinnen und Forscher
                weltweit waren bereits dank der Freiburger Intervallbibliothek
                in der Lage, auf Veröffentlichungen aus der Anfangszeit der
                Intervallmathematik zurückgreifen zu können, die in deren
                Bibliotheken nur schwer oder gar nicht mehr verfügbar sind.
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
