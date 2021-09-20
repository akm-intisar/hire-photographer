import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import Login from "../Login/Login";


const UrgentNeed = () => {
  return (
    <div>
                  <Alert color="danger">
        <h4 className="alert-heading">We're here 24/7 to help you out!</h4>
        <p>
          Here is out 24/7 active hotline number. If you need any kind of service that is unavailable in our system. Do a phone call or send a sms. You can also drop a mail! 
        </p>
        <hr />
        <p className="mb-0">
          Call 01010101010101 <br></br>
          Email: urgent@hirephotogrpaher.com
        </p>
        <Login></Login>
      </Alert>
    </div>
  );
};

export default UrgentNeed;
