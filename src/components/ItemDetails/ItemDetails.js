import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";
//import Collapse from "@material-ui/core/Collapse";
//import CardMedia from "@material-ui/core/CardMedia";
export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item Details{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div
            style={{
              boxShadow: "1px 2px 5px grey",
              padding: "30px",
              marginTop: 20
            }}
          >
            <img
              width={100}
              height={130}
              src="https://images-na.ssl-images-amazon.com/images/I/91T8GA3DcML._SL1500_.jpg"
            />
            <p>Name of product</p>
            <Row className="show-grid">
              <Col md={6}>
                <strong>{`$${this.props.price}`}</strong>
                <br />
              </Col>
              <Col md={6}>Qty: 1</Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}
