import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import ReviewScreen from "./components/ReviewScreen";
import ButtonSelectionScreen from "./components/ButtonSelectionSection";
import { makeStyles } from "@material-ui/styles";
import ButtonAppBar from "./components/MainTitleHeader";
import { testData } from "./testData";

const useStyle = makeStyles((theme) => ({
  wholeScreen: {
    backgroundColor: "salmon",
    minHeight: "100vh",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  reviewPicture: {
    marginTop: 70,
  },
  stickyFooter: {
    marginTop: "calc(5% + 60px)",
    bottom: 0,
  },
}));

function App() {
  const styles = useStyle();

  return (
    <div className={styles.wholeScreen}>
      <ButtonAppBar />
      <Grid
        container
        className={styles.reviewPicture}
        direction="column"
        justifyContent={"space-evenly"}
        alignItems="stretch"
      >
        <Grid item>
          {testData.map((profile, idx) => {
            return (
              <ReviewScreen
                isTopElement={idx === 0}
                Zindex={testData.length - idx}
                profile={profile}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid item className={styles.stickyFooter}>
        <ButtonSelectionScreen />
      </Grid>
    </div>
  );
}

export default App;
