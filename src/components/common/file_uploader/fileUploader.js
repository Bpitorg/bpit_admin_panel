import React, { useRef, useState } from 'react'
import { Button, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import './styles.css';
import http_lib from '../../../http/http';
import { useNavigate } from 'react-router-dom';

function FileUploader({ setLoader, sampleFileLink, url }) {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState(null)
  const [uploaded, setUploaded] = useState(false)
  const navigate = useNavigate()
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      setUploaded(true)
      setFileName(e.dataTransfer.files[0]['name'])
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setUploaded(true)
      setFile(e.target.files[0])
      setFileName(e.target.files[0]['name'])
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  // to remove file
  const deleteFile = () => {
    setUploaded(false)
    setFile(null)
    inputRef.current.value = ''
  }

  const handleSubmit = (e) => {
    setLoader(true)
    const formData = new FormData()
    formData.append("is_file", true);
    formData.append("file", file);
    e.preventDefault()
    http_lib.post(url, formData)
      .then(() => {
        setLoader(false);
        navigate("/home/students");
      })
      .catch((err) => {
        console.log(err)
        setLoader(false);
      });
  }

  return (
    <Paper variant='outlined'>
      <Grid container p={3}>

        <Grid item xs>
          <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={handleSubmit}>
            <input ref={inputRef} type="file" id="input-file-upload" onChange={handleChange} accept='.xls,.xlsx' />
            <label id="label-file-upload" htmlFor="input-file-upload">

              <div>
                <CloudUploadIcon id='upload-icon' className={(dragActive || uploaded) ? "drag-active" : ""} />
                {
                  uploaded ?
                    <>
                      <Typography>
                        {fileName} <IconButton onClick={deleteFile}> <DeleteIcon /> </IconButton>
                      </Typography>
                      <Button fullWidth type='submit' variant='contained' sx={{ my: 3 }} >Upload</Button>
                    </>
                    :
                    <>
                      <Typography>Drag and drop your file</Typography>
                      <Divider sx={{ my: 3 }}>OR</Divider>
                      <Button variant='contained' onClick={onButtonClick}>Browse File</Button>
                      <br />
                      <Button disabled size='small' sx={{ mt: 1 }}>Supported file formats .xls, xlsx</Button>
                    </>
                }
              </div>

            </label>
            {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
          </form >
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 3 }}></Divider>

        <Grid item xs p={1}>
          <Typography variant='h6'>INSTRUCTIONS</Typography>
          <ul>
            <li>Upload .xls, .xlsx file only</li>
            <li>Maximum file size should be 1MB</li>
            <li>Data should be in required format only</li>
            <li>mba = 1 bba = 2 btech = 3</li>
          </ul>
          <Typography variant='h6'>Download sample file from <a href={sampleFileLink}>here</a> </Typography>
        </Grid>
      </Grid>

    </Paper >
  );
}

export default FileUploader;

  // file: Yup.mixed()
  //   .required("Please select a file")
  //   .test(
  //     "fileFormat",
  //     "Invalid file format",
  //     (value) =>
  //       value &&
  //       [
  //         "application/vnd.ms-excel",
  //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //       ].includes(value.type)
  //   ),