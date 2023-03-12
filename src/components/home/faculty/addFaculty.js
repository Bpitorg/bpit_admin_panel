import React, { useState } from 'react';
// import http_lib from '../../../http/http';
// import { SUBJECTS_URL } from '../../../constants/api_endpoints';
import FileUploader from '../../common/file_uploader/fileUploader';

function AddFaculty({ setLoader }) {
  const [file, setFile] = useState(null)
  // const postData = () => {
  //   setLoader(true)
  //   http_lib.post(SUBJECTS_URL, {})
  //     .then(res => {
  //       setLoader(false)
  //     })
  //     .catch(err => {
  //       setLoader(false)
  //       console.log(err)
  //     })
  // }


  return (
    <>
      <FileUploader setFile={setFile} sampleFileLink={process.env.PUBLIC_URL + '/upload_data_files/add_faculty_users.xlsx'} />
    </>
  )
}

export default AddFaculty;