import React from "react";
import "./bulkUploadNote.css";
import { Button } from "@mui/material";
// import StudenSampleCSV from '../../../public/upload_data_files/student_format.xlsx'

function BulkUploadNote() {
  return (
    <div className="note">
      <h2>NOTE:</h2>
      <ul>
        <li>Please provide data as per the format in the sample file.</li>
        <li>
          Please try to open your sample Excel file always with MS excel or google
          sheets but don't open with other editors.
        </li>
        <li>
          Please ensure you are using the corresponding codes for their
          respecctive branches in the excel file:
        </li>
        <li className="nestedLi">MBA - 1</li>
        <li className="nestedLi">BBA - 2</li>
        <li className="nestedLi">B.Tech - 3</li>
      </ul>
      <h2>
        Download Sample CSV
        <Button color="success">
          <a
            href={
              process.env.PUBLIC_URL + "/upload_data_files/student_format.xlsx"
            }
            target="_blank" rel="noreferrer"
          >
            CLICK HERE{" "}
          </a>
        </Button>
      </h2>
    </div>
  );
}

export default BulkUploadNote;
