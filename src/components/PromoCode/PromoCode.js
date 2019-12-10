import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormControl,
  FormGroup
} from "react-bootstrap";

export default class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ""
    };
  }

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply` : `Hide`} Promo code{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="formInlineName">
                    <span>Promo Code</span>
                    <FormControl
                      type="text"
                      placeholder="Enter"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button
                    block
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}
