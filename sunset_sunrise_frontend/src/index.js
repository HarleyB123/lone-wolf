import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Ezw extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
          startDate: new Date(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date)
    {
    }//handleChangeStart

    handleChangeEnd(date)
    {
    }//handleChangeEnd

    render()
    {
      return (
        <div>
        <h1>EZ Weather Forecast React Frontend</h1>
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
        </div>
      );
    }//render
}//ezw

ReactDOM.render(
    <Ezw />,
    document.getElementById('root')
  );
