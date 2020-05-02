   import React from "react";
   import {Link } from "react-router-dom";
  
  
  class MyReservation extends React.Component
  {

   constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {

        return (
          <div>
            <p>
              This is the first page.
              <br />
              Click on the button below.
            </p>
            <Link to="/page2"><button>
              Go to Page 2 
            </button>
            </Link>
          <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value ="2"/>
          </label>
          </div>
        );

    }
  };
  export default MyReservation;