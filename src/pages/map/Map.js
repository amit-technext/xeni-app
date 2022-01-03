import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-providers';
import { Map as ReactMap } from 'react-leaflet';
import MapControl from './MapControl';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends Component {
  map = createRef();

  componentDidMount() {
    L.tileLayer
      .provider('Stamen.TonerLite')
      .addTo(this.map.current.leafletElement);
  }

  zoomIn = () => {
    this.map.current.leafletElement.setZoom(
      this.map.current.leafletElement.getZoom() + 1
    );
  };

  zoomOut = () => {
    this.map.current.leafletElement.setZoom(
      this.map.current.leafletElement.getZoom() - 1
    );
  };

  resetMap = () => {
    this.map.current.leafletElement.setView(this.props.center, this.props.zoom);
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <ReactMap
        ref={this.map}
        maxBounds={[
          [90, -180],
          [-90, 180]
        ]}
        zoomControl={false}
        {...rest}
      >
        <MapControl
          onZoomIn={this.zoomIn}
          onZoomOut={this.zoomOut}
          onReset={this.resetMap}
        />
        {children}
      </ReactMap>
    );
  }
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomSnap: PropTypes.number,
  scrollWheelZoom: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

Map.defaultProps = {
  center: [40.737, -73.923],
  zoom: 1.55,
  minZoom: 1,
  zoomSnap: 0.5,
  scrollWheelZoom: true
};

export default Map;
