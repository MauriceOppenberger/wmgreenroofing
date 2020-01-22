import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import { MdLocationOn } from "react-icons/md"

const Marker = () => (
  <div>
    <a
      href="https://www.google.com/maps/place/Wm.+Green+Roofing+Ltd./@43.5464768,-80.2743878,15z/data=!4m2!3m1!1s0x0:0x5da98aafa77f1575?sa=X&ved=2ahUKEwj5tuWKi9TmAhWEg-AKHesrCvwQ_BIwE3oECA0QCA"
      target="_blank"
      rel="noreferrer noopener"
    >
      <MdLocationOn size={32} color={"red"} />
    </a>
  </div>
)

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.5464768,
      lng: -80.2765314,
    },
    zoom: 15,
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{ width: "100%", height: "100%", border: "2px solid lightgray" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAZwLoKfSKD--FX2iJ2BzdpcXB9j0izkik",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={43.5464768} lng={-80.2765314} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
