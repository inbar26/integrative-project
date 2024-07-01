import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import DateCalendar from "../components/DateCalendar";

function Lobi() {
  return (
    <>
    <LayoutComponent>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: '30px',
              color: 'black',
              textAlign: 'left',
              marginTop: '30px',
              fontWeight: 'bold',
            }}
          >
            Dashboard
            <hr />
          </h1>
        </div>
        <div style={{ marginRight:"2px",marginTop:"100px" }}>
          <DateCalendar />
        </div>
      </div>
    </LayoutComponent>
    </>
  );
}

export default Lobi;
