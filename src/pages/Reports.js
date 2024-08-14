import React from "react";
import impact2023_2024 from "../reports/gbstem-impact.pdf";
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Reports() {
  const [dialog, setDialog] = React.useState(false);

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
        <Button onClick = {() => setDialog(true)} style = {{width: "fit-content", fontSize: "1rem", marginTop: "2rem"}}>Read it here</Button>
      </Card>
      <Modal 
       show={dialog}
        backdrop="static"
        keyboard={false}
        className="report"
        style={{borderRadius: "1rem"}}>
        <Modal.Header closeButton onClick={() => setDialog(false)} style = {{height: "0", border: "none"}}>
        </Modal.Header>
      <div style={{margin: "2rem", marginTop: "0rem"}}>
      <iframe src={ impact2023_2024 + "#view=Fit&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0&frameborder=0"} width = "100%" height = "700rem" style={{borderStyle:"solid", borderWidth:"1px", borderColor:"gray", objectFit: "contain"}}>
      </iframe>
      </div>
      </Modal>
    </div>
    </div>
  )
}

export default Reports;