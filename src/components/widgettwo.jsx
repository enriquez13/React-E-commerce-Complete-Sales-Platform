import React, { Component } from 'react';

class WompiWidget extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="wompi-widget-container"></div>
    )
  }
}

export default WompiWidget;