import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #2B67B2',
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  display: 'flex',
  margin: '1rem',
  gap: 10
};
  
const btnstyle = {
  minWidth: 150,
}

export default function ModalForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={btnstyle} variant="contained" onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h3>Stock Entry Form</h3>
            <div style={inputStyle}> 
              <TextField id="outlined-basic" label="Season" variant="outlined"/>
              <TextField id="outlined-basic" label="SBU" variant="outlined"/>
            </div>
            <div style={inputStyle}> 
              <TextField id="outlined-basic" label="Proto No." variant="outlined"/>
              <TextField id="outlined-basic" label="Style/Iot No." variant="outlined"/>
            </div>
            <div style={inputStyle}> 
              <TextField id="outlined-basic" label="Item Name" variant="outlined"/>
              <TextField id="outlined-basic" label="Color" variant="outlined"/>
            </div>
            <div style={inputStyle}> 
              <TextField id="outlined-basic" label="Material No." variant="outlined"/>
              <TextField id="outlined-basic" label="Fabric Code" variant="outlined"/>
            </div>
            <div style={inputStyle}> 
              <TextField id="outlined-basic" label="Fabric Composition" variant="outlined"/>
              <TextField id="outlined-basic" label="V code Number" variant="outlined"/>
            </div>
            <div style={inputStyle}> 
              <TextField id="outlined-basic" label="V code Date" variant="outlined"/>
              <TextField id="outlined-basic" label="Remarks" variant="outlined"/>
            </div>
            <Button style={btnstyle} variant="contained">Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}