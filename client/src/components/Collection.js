import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import SearchHome from "./SearchHome";
import { Input, Icon, Collapsible, CollapsibleItem } from "react-materialize";
import "../App.css";
class Collection extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <h3>List of all the documents we have</h3>
        </div>
        <Row>
          <Col sm={12} md={8} lg={12}>
            <Collapsible>
              <CollapsibleItem header="title 1" icon="dehaze">
                Autor: Autor1 <br />
                Year of release: 2000<br />
                Pages:400 <br />
                <a class="btn-floating btn-medium waves-effect waves-light ">
                  <i class="material-icons">add</i>
                </a>
              </CollapsibleItem>
              <CollapsibleItem header="title 2" icon="dehaze">
                Autor: Autor2 <br />
                Year of release: 2000<br />
                Pages:400<br />
                <a class="btn-floating btn-medium waves-effect waves-light ">
                  <i class="material-icons">add</i>
                </a>
              </CollapsibleItem>
              <CollapsibleItem header="title3 " icon="dehaze">
                Autor: Autor3 <br />
                Year of release: 2000<br />
                Pages:400<br />
                <a class="btn-floating btn-medium waves-effect waves-light ">
                  <i class="material-icons">add</i>
                </a>
              </CollapsibleItem>
              <CollapsibleItem header="title4 " icon="dehaze">
                Autor: Autor3 <br />
                Year of release: 2000<br />
                Pages:400<br />
                <a class="btn-floating btn-medium waves-effect waves-light ">
                  <i class="material-icons">add</i>
                </a>
              </CollapsibleItem>
              <CollapsibleItem header="title5 " icon="dehaze">
                Autor: Autor3 <br />
                Year of release: 2000<br />
                Pages:400<br />
                <a class="btn-floating btn-medium waves-effect waves-light ">
                  <i class="material-icons">add</i>
                </a>
              </CollapsibleItem>
              <CollapsibleItem header="title6 " icon="dehaze">
                Autor: Autor3 <br />
                Year of release: 2000<br />
                Pages:400<br />
                <a class="btn-floating btn-medium waves-effect waves-light ">
                  <i class="material-icons">add</i>
                </a>
              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Collection;
