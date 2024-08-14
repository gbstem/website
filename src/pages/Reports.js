import React from "react";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Reports() {

  return (
    <div className="container">
      <div className="text-center m-5">
        <h1>Reports & Posts</h1>
      </div>
      <div style = {{display:"flex", flexWrap: "wrap", gap: "3rem",  width: "fit-content", marginLeft: "auto", marginRight:"auto", marginBottom:"5rem", alignItems:"stretch", justifyContent:"center", justifyItems:"stretch"}}>
      <Card style={{ width: '18rem', padding: '1rem', boxShadow: "1px 2px 2px 2px rgba(20,20,20,0.4)"}}>
        <div>
        gbSTEM is pleased to present our Impact Report for the 2023-2024 school year!
        </div>
        <Button href = {'https://www.gbstem.org/reports/gbstem-impact.pdf'} style = {{width: "fit-content", fontSize: "1rem", marginTop: "2rem"}}>Read it here</Button>
      </Card>
    </div>
    </div>
  )
}

export default Reports;