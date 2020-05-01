   import React from "react";
   import {Link } from "react-router-dom";
   
   function Page2() {

        return (
          <div>
            <p>This is the second page.</p>
            <Link to="/page3"><button>
              Go to Page 3 
            </button>
            </Link>
          </div>
        );

    }

    export default Page2;