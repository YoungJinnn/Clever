import { TextField } from "@mui/material";

const EssayQuestion = (props) => {
  return(
    <>
        <TextField
          color='warning'
          fontSize='10px'
          required
          multiline
          fullWidth
          rows={1}
          id={props.pid}
          name={props.pname}
          variant="filled"
          onChange={props.changeEssayHandler}
        />
    </>
  )
  
}

export default EssayQuestion;