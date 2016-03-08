'use strict';

import React from 'react';

import './styles/map.less';

class Component extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
        this.map = {};
        this.initMap();
        $(document.body).on('infosubmit', this.mapLocation.bind(this))
    }

    initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 32.297, lng: -116.00},
            zoom: 7
        });
        google.maps.event.addListener(this.map, 'click', this.getMouseCoords.bind(this))
    }

    mapLocation(e, obj){
        this.geoLocate(e, obj, (location) => {
            this.setMarker(location);
            this.map.setCenter(location);
            this.map.setZoom(13);
        });
    }

    geoLocate(e, obj, cb){
        let address = `${obj.addr} ${obj.city}, ${obj.state}`;
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: address}, (res, status) => {
            if(status === "OK") {
                cb(res[0].geometry.location)
            }
            else { alert(status, res) }
        })
    }

    setMarker(location) {
        let newMarker = new google.maps.Marker()
        newMarker.setPosition(location)
        newMarker.setMap(this.map);
    }

    getMouseCoords(e) {
        return {lat: e.latLng.lat(), lng: e.latLng.lng()}
    }


    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Component
