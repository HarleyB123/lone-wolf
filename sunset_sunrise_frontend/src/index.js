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