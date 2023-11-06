import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function EventSecondBlock() {
  return (
      <Box style={{padding:" 0 0 0 5%"}}>
        <Grid container >
            <Grid item xs={5}>
            <div>
                <b>Part 2 - 24-Hour Flight Sim Competition: </b>
                <ul>
                  <li><b>Non-stop Action:</b> Join us for a thrilling 24-hour flight simulation competition that kicks off at 12 pm on day 1 and concludes at 12 pm on day 2.</li>
                  <li><b>Support Shannon Aviation Museum:</b> All proceeds from this competition will go to the Shannon Aviation Museum.</li>
                  <li><b>Team Competition:</b> Teams of 4-8 participants will compete in 4 flight simulators, flying around the world without stopping.</li>
                  <li><b>Fundraising Requirement:</b> Each team must raise a minimum of €3000 to enter.</li>
                  <li><b>To Register a Team:</b> Contact our flight sim team at flightsim@avcon.ie.</li>
                </ul>
                <br />
                <b>Exhibitor Inquiries:</b>
                <p>If you are interested in showcasing your products or services at AvCon, please contact us at hello@avcon.ie.</p>
                <hr/>
                <p>
                  AvCon promises to be an event like no other, offering a unique blend of education, entertainment, and fundraising for a great cause. Join us on [event dates] and be a part of the aviation revolution!
                  <br/><br/>
                  For the latest updates and information, visit our website at www.avcon.ie 
                  <br/>
                  Don't miss your chance to be a part of the future of aviation at AvCon!
                </p>
            </div>
            </Grid>
            <Grid item xs={7}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                  alt="Airplane"
                  style={{ width: '80%', mixBlendMode: 'luminosity'}}
                />
              </div>
            </Grid>
        </Grid>
      </Box>
  );
}
