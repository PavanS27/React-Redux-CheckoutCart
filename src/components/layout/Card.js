import React, { Component } from "react";
import Subtotal from "../Subtotal/Subtotal";
import Pickupsavings from "../Pickupsavings/PickUpSvaings";
import TaxesFees from "../TaxesFees/TaxesFees";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estTotal: 0
    };
  }

  render() {
    return (
      <div className="card">
        <Subtotal price={this.state.total.toFixed(2)} />
        <Pickupsavings price={this.state.PickupSavings} />
        <TaxesFees taxes={this.state.taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal price={this.state.estTotal.toFixed(2)} />
      </div>
    );
  }
}
