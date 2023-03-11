import React from 'react'
import { Button, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import './styles.css'

function FileUploader({ setFile, sampleFileLink, instructions }) {
  const [fileName, setFileName] = React.useState('')
  const [uploaded, setUploaded] = React.useState(false)
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

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

  return (
    <Paper variant='outlined'>
      <Grid container p={3}>

        <Grid item xs>
          <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
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
                    </>
                    :
                    <>
                      <Typography>Drag and drop your file</Typography>
                      <Divider sx={{ my: 3 }}>OR</Divider>
                      <Button variant='contained' onClick={onButtonClick}>Upload File</Button>
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