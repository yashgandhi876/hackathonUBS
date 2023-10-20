import {useState, useEffect} from "react";
import "./Analytics.css"
import CountUp from 'react-countup';
import Chart from 'react-google-charts';
import axios from "axios";
import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";

export default function Analytics() {


  const [tagCount, setTagCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [contributorsCount, setContributorsCount] = useState(0);


  const fetchData = async () => {
    await axios.get("http://localhost:8080/get-tags-count").then((res) => {
      setTagCount(res.data);
    })

    await axios.get("http://localhost:8080/get-projects-count").then((res) => {
      setProjectCount(res.data);
    })

    await axios.get("http://localhost:8080/get-contributors-count").then((res) => {
      setContributorsCount(res.data);
    })
  }

  useEffect(() => {
    fetchData()
  })


  const data = [
    ["Task", "Hours per Day"],
    ["Javascript", 11],
    ["Java", 2],
    ["React", 2],
    ["SQL", 2],
    ["Kotlin", 7],
  ];
  
  const options = {
    title: "Technologies used",
  };
    const containerStyling = {
        boxShadow: `0px 2px 9px #ddd`,
        borderRadius: `10px`,
        padding: "16px",
    };

    return (
		// <div className="analytics">
      // <div className="cards">
      //   <div className="card">
      //     <label className="numberLabel">
      //     <CountUp className="number" end={tagCount} />+</label>
      //     <p className="name">Number of Tags</p>
      //   </div>
      //
      //   <div className="card">
      //     <label className="numberLabel">
      //     <CountUp className="number" end={projectCount} />+</label>
      //     <p className="name">Number of Projects</p>
      //   </div>
      //
      //   <div className="card">
      //     <label className="numberLabel">
      //     <CountUp className="number" end={contributorsCount} />+</label>
      //     <p className="name">Number of Contributors</p>
      //   </div>
      // </div>
      // <div className="charContainer">
      //   <Chart
      //   chartType="PieChart"
      //   data={data}
      //   options={options}
      //   width={"700px"}
      //   height={"700px"}
      // />
      // </div>
		// </div>
        <Container>
        <Box py={3}>
          <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "2em",
              }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                >
                  Insights
                </Typography>
                <Grid container sx={{ marginTop: "1em" }} spacing={3}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Card
                        elevation={10}
                        sx={{ height: "100%", ...containerStyling }}
                    >
                      <Typography
                          variant="h5"
                          style={{
                            fontWeight: "bold",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                            textAlign: "center",
                            fontFamily: "sans-serif",
                          }}
                      >Number of Tags
                      </Typography>
                      <Typography
                          variant="h2"
                          style={{
                            marginTop: "0.4em",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            color: "rgb(230,0,0)",
                          }}
                      >
                          {projectCount}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <Card
                        elevation={10}
                        sx={{ height: "100%", ...containerStyling }}
                    >
                      <Typography
                          variant="h5"
                          style={{
                            fontWeight: "bold",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                            textAlign: "center",
                            fontFamily: "sans-serif",
                          }}
                      >
                          Contributors
                      </Typography>
                      <Typography
                          variant="h2"
                          style={{
                            marginTop: "0.4em",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            color: "rgb(230, 0, 0)",
                          }}
                      >
                          {contributorsCount}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <Card
                        elevation={10}
                        sx={{ height: "100%", ...containerStyling }}
                    >
                      <Typography
                          variant="h5"
                          style={{
                            fontWeight: "bold",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                            textAlign: "center",
                            fontFamily: "sans-serif",
                          }}
                      >
                        Topics
                      </Typography>
                      <Typography
                          variant="h2"
                          style={{
                            marginTop: "0.4em",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            color: "rgb(230,0,0)",
                          }}
                      >
                        7
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <Card
                        elevation={10}
                        sx={{ height: "100%", ...containerStyling }}
                    >
                      <Typography
                          variant="h5"
                          style={{
                            fontWeight: "bold",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                            textAlign: "center",
                            fontFamily: "sans-serif",
                          }}
                      >
                        Users
                      </Typography>
                      <Typography
                          variant="h2"
                          style={{
                            marginTop: "0.4em",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            color: "rgb(230,0,0)",
                          }}
                      >
                        10
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box>
          </Box>
        </Box>
            <br/>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}
            >
                Technologies Used
            </Typography>
            <div className="charContainer">
                <Chart
              chartType="PieChart"
              data={data}
              width={"700px"}
              height={"700px"}
            />
            </div>
        </Container>
    );
}
