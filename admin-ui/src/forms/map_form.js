import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './mapform.css' 
import Grid from '@mui/material/Grid';
import DList from './dragablelist';

mapboxgl.accessToken = 'pk.eyJ1IjoibXVuaXJ5YXNpciIsImEiOiJja25tdGI5a3QwODQ0MnZsYThidGdhY2dzIn0.EbuNhJ-e6WojLCyJbiVu7Q';

export default class Map_form extends React.PureComponent {
    constructor(props) {
            super(props);
            this.state = {
            lng: -70.9,
            lat: 42.35,
            zoom: 9
            };
            this.mapContainer = React.createRef();
        }
    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
    }
    render() {
        return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item  xs={4} >
            <DList />
            </Grid>
            <Grid item  xs={8} >
                <div>
                <div ref={this.mapContainer} className="map-container" />
                </div>
            </Grid>
        </Grid>
        );
        }
}