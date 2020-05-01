import React from "react";
import {Link } from "react-router-dom";

   function Page3() {

        return (
          <div>
            <p>This is the third page.</p>
            <Link to="/"><button>
              Go to Page 1
            </button>
            </Link>
          </div>
        );

    }

    export default Page3;