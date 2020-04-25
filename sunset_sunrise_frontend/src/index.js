import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Geosuggest from 'react-geosuggest';

class Ezw extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
          ....
          latitude: null,
          longitude: null,
          readyToSubmit: false,
          location: null,
          status: "Enter date and location..."
        };
        ....
        this.handleLocation = this.handleLocation.bind(this);
        this.resetLocation = this.resetLocation.bind(this);
    }

    handleLocation(loc)
    {
        if (typeof loc !== 'undefined')
        {
            this.setState({
                latitude: loc.location.lat,
                longitude: loc.location.lng,
                location: loc.label,
                readyToSubmit: true,
                status: "Ready to Send"
              });
        }
    }//handleLocation

    resetLocation()
    {
        this.setState({
            latitude: null,
            longitude: null,
            readyToSubmit: false,
            status: "Enter date and location..."
        });
    }//resetLocation

    render()
    {
      var fixtures = [
        {label: 'Mountain View Station, Mountain View, CA, USA', location: {lat: 37.3945565, lng: -122.0782263}},
        {label: 'Mountain View Public Library, Franklin St, Mountain View, CA, USA', location: {lat: 37.3968885, lng: -122.0929291}},
      ];

      return (
        <div>
         .....
           <div className="comp_ezw">
                <div>Location:</div>
                <Geosuggest
                ref={el=>this._geoSuggest=el}
                placeholder="Start typing!"
                initialValue="Mountain View"
                fixtures={fixtures}
                onSuggestSelect={this.handleLocation}
                onChange={this.resetLocation}
                location={new window.google.maps.LatLng(37.38605, -122.08385)}
                radius="20" />
            </div>
        </div>
      );
    }//render

    constructor(props) {
        super(props);
        this.state =
        {
          startDate: new Date(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
    }

    handleChangeStart(date)
    {
        if (date > this.state.endDate)
        {
            this.setState({
                endDate: date
            });
        }

        this.setState({
          startDate: date
        });
    }//handleChangeStart

    render()
    {
      return (
        <div>
        <h1>EZ Weather Forecast React Frontend</h1>
            <div className="comp_ezw">
                <div>Date :</div>
                <DatePicker
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                onChange={this.handleChangeStart}
                dateFormat="dd-MM-yyyy"
                className="ezw_datepicker"
                />
            </div>
        </div>
      );
    }//render
}//ezw

ReactDOM.render(
    <Ezw />,
    document.getElementById('root')
  );
