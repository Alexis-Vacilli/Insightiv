import * as React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const useStyles = makeStyles({
    container: {
      width: "290px",
      position: "fixed",
      right: "0px",
      bottom: "70px"

    },

    accordion: {
        padding: "10px 0",
        backgroundColor: "#15A2B7",
        color: "#fff",
        fontWeight: "500",
    },

    greetings: {
        backgroundColor: "#607D8A",
        padding: "10px 10px 2px 5px",
        borderRadius: "20px 5px 20px 5px"
    },
    textfieldContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "20px",

    },
    textfield: {
        width: "100%",
        // backgroundColor: "#fff",
        outline: "none",
        margin: "10px 0",
        borderRadius: "20px"
        
    },
    buttonSend: {
        position: "relative",
        width: "30%",
        left: "180px",
        backgroundColor: "#607D8A",
    }
  })
  

export default function Footer() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
        <div className={classes.container}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AnnouncementIcon />
          <Typography sx={{ width: '70%', flexShrink: 0 }}>
            Leave feedback
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#A0BFDC"}}>
          {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography> */}
          <div className={classes.greetings}>
              <Typography variant="body2">
                Greetings from Insightiv Team!
                You can leave a feedback ranging from feature requests to error reports.
                We are happy to hear from you.
              </Typography>
          </div>
          <div className={classes.textfieldContainer}>
            <TextField id="outlined-basic" label="full names"  variant="outlined" className={classes.textfield} />
            <TextField id="outlined-basic" label="email"  variant="outlined" className={classes.textfield} />
            <TextField id="outlined-basic" label="subject"  variant="outlined" className={classes.textfield} />
            <Button className={classes.buttonSend}>
                <SendIcon />
                Send
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
         <div style={{width: "100%", backgroundColor: "#E1F5FE", position: "fixed", bottom: "0", paddingBottom: "12px"}}>
            <Typography variant="h6" style={{fontSize: "13px",  color: "rgba(0, 0, 0, 0.5)"}} >&copy; 2019 - 2021, Insightiv. All rights reserved.</Typography>
         </div>
        </>
    )
}

