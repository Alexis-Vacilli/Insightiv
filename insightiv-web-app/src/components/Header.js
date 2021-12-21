import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  container: {
      backgroundImage: "url(https://insightiv.ai/files/web/assets/curved-bg-home.svg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "98vw 3300px"
  }
})


const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box backgroundColor="primary" style={{height: "90vh"}}>
                <Grid container direction="column" spacing={2} style={{position: "relative", top:"50%", transform: "translateY(-50%)"}}>
                    <Grid item>
                        <Typography variant="h4" fontWeight="700" style={{fontSize:"40px", marginTop: "40px"}}>Insightiv Diagnostics Platform</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{marginTop: "25px"}} >Hybrid teleradiology platform for medical imaging diagnostics and research.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{fontSize: "16px", marginTop: "25px"}}>Combining PACS, extensive Imaging Viewer and Artificial Intelligence screening capabilities in a single platform.</Typography>
                    </Grid>
                    <Grid item style={{fontSize: "16px", margin: "20px 0"}}>
                        <Stack item container justifyContent="center" direction="row" spacing={3}>
                            <Button variant="contained" color="secondary" style={{textTransform :"none", padding: "10px 30px" }}>Try now!</Button>
                            <Button variant="outlined" color="secondary" style={{textTransform :"none", padding: "10px 30px", border: "2px solid #15A2B7", boxShadow: "0px 2px 2px 0px #0000007c" }}>Create Account</Button>
                        </Stack>
                    </Grid>
                    <Grid item container justifyContent="center">
                        <Stack>
                            <Typography variant="h6" fontWeight="400" style={{textAlign: "right"}}>
                                Try our medical imaging viewer by exploring
                            </Typography>
                            <Typography variant="h6" fontWeight="400" style={{textAlign: "right"}}>
                                public studies.
                            </Typography>
                        </Stack>
                        <Grid>
                            <Typography variant="h6" fontWeight="400" style={{textAlign: "left", marginLeft: "30px"}}>
                                Register to upload private studies and get
                            </Typography>
                            <Typography variant="h6" fontWeight="400" style={{textAlign: "left", marginLeft: "30px"}}>
                                access to more features.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{height: "100vh"}}>
                <Grid container justifyContent="center" direction="row" style={{position: "relative", top:"50%", transform: "translateY(-50%)", padding: "0 100px"}}>
                    <Grid item md={6}>
                        <Typography variant="h4" style={{textAlign: "left"}}>
                        A wide range of medical imaging modalities are handled
                        </Typography>
                        <Typography variant="h5" style={{fontSize: "30px", color: "#007bff", textAlign: "left"}}>Learn More</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://insightiv.ai/files/web/assets/in_workflow_reporting.png" alt="whatever" style={{width: "90%"}}/>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{height: "70vh"}}>
                <Grid container justifyContent="center" direction="row" style={{position: "relative", top:"50%", transform: "translateY(-50%)", padding: "0 100px"}}>
                    <Grid item md={6}>
                        <Typography variant="h4" style={{textAlign: "left"}}>
                        Feature-rich medical image viewer, in-workflow reporting and so much more!
                        </Typography>
                        <Typography variant="h5" style={{fontSize: "30px", color: "#007bff", textAlign: "left"}}>See More</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://insightiv.ai/files/web/assets/ct_viewer.png" alt="whatever" style={{width: "90%"}}/>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{height: "100vh"}}>
                <Grid container justifyContent="center" direction="row" style={{position: "relative", top:"50%", transform: "translateY(-50%)", padding: "0 100px"}}>
                    <Grid item md={6}>
                        <Typography variant="h4" style={{textAlign: "left"}}>
                        A wide range of medical imaging modalities are handled
                        </Typography>
                        <Typography variant="h5" style={{fontSize: "30px", color: "#007bff", textAlign: "left"}}>Learn More</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://insightiv.ai/files/web/assets/images_storage.png" alt="whatever" style={{width: "90%"}}/>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{height: "100vh"}}>
                <Grid container justifyContent="center" direction="row" style={{position: "relative", top:"50%", transform: "translateY(-50%)", padding: "0 100px"}}>
                    <Grid item md={6}>
                        <Typography variant="h4" style={{textAlign: "left"}}>
                        Globally deployed 
                        to compliy with data localization
                        policies
                        </Typography>
                        <Typography variant="h5" style={{fontSize: "30px", color: "#007bff", textAlign: "left"}}>Learn More</Typography>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://insightiv.ai/files/web/assets/diagnostics_regions_on_map.png" alt="whatever" style={{width: "100%", marginTop: "-140px"}}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}


export default Header;
