import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Geosuggest from 'react-geosuggest';
import axios from 'axios';
import moment from 'moment';
import './index.css';

function cardLayout(props)
{
    return (
           <div className="weather_card">
              <div className="weather_info">
                <div><div className="report_item">Date:</div> {props.date}</div>
                <div><div className="report_item">Sunrise - UTC Time:</div> {props.sunrise}</div>
                <div><div className="report_item">Sunset - UTC Time:</div> {props.sunset}</div>
              </div>
           </div>
      );
}//cardLayout

function Weathercard(props, location)
{
    let sunrise_report = props.reports;
    let json_report = [];


    if (typeof sunrise_report !== 'undefined')
    {
        json_report=JSON.parse(sunrise_report);
    }//if not undefined

    var rows = [];
    rows.push( cardLayout(json_report));

    return (
      <div>
          <div className="location">{location}</div>
          <div>
            {rows}
          </div>
      </div>
    );
}


class Ezw extends React.Component {
    constructor(props) {
        super(props);
              this.state =
        {
          startDate: new Date(),
          latitude: null,
          longitude: null,
          readyToSubmit: false,
          location: null,
          status: "Enter date and location..."
        };
        //bind to make `this` work in the callback
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.resetLocation = this.resetLocation.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    getResult()
    {
        //send to server
        let json_req = {"latitude": this.state.latitude, "longitude": this.state.longitude,
        "date": moment(this.state.startDate).format('YYYY-MM-DD')};

        axios.post(process.env.HELLO_SERVICE_HOST,json_req)
        .then(res => {
            this.setState({
                status: Weathercard(res.data, this.state.location)
            });
        })

    }//getResult

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
    }

    resetLocation()
    {
        this.setState({
            latitude: null,
            longitude: null,
            readyToSubmit: false,
            status: "Enter date and location..."
        });
    }//handleChangeEnd

    render()
    {
      let weather_report;
      weather_report = this.state.status;


      return (
        <div>
            <div className="comp_ezw">
                <div>Date range:</div>
                <DatePicker
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                onChange={this.handleChangeStart}
                dateFormat="dd-MM-yyyy"
                className="ezw_datepicker"
                />
            </div>
            <div className="comp_ezw">
                <div>Location:</div>
                <Geosuggest
                    ref={el=>this._geoSuggest=el}
                    placeholder="Start typing!"
                    initialValue="Mountain View"
                    onSuggestSelect={this.handleLocation}
                    onChange={this.resetLocation}
                    location={new window.google.maps.LatLng(37.38605, -122.08385)}
                    radius="20"
                />
            </div>
            <div className="comp_ezw">
                <button
                    onClick={this.getResult }
                    disabled={!this.state.readyToSubmit}
                    className="button_ezw"
                    >
                    SUBMIT
                </button>
			</div>
            <div className="report_ezw">
                {weather_report}
            </div>
        </div>
      );
    }//render
}

ReactDOM.render(
    <Ezw />,
    document.getElementById('root')
);
