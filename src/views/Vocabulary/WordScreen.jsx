import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Progress } from "react-sweet-progress";
import { bugs, website, server } from "variables/general.jsx";
import TopicData from "./TopicData";
import topic2 from "./VocabularyList";
import Button from "components/CustomButtons/Button.jsx";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import TopicCard from "./VocabularyCard";
import WordCard from "./WordCard";
import { Grid } from "@material-ui/core";

const styles = {
  profileCard: {
    marginLeft: "160px",
    marginRight: "160px"
  },
  smallVioletGreyDot: {
    width: "10px",
    height: "10px",
    cornerRadius: "50%",
    backgroundColor: "#BC9CFF"
  },
  smallYellowGreyDot: {
    width: "10px",
    height: "10px",
    cornerRadius: "50%",
    backgroundColor: "#FFE39C"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "28px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "center"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  topicTitle: {
    color: "#00BCD4",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "16px",
    marginLeft: "16px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "40px",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  profileTitle: {
    color: "#0099DA",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontStyle: "italic",
    textAlign: "left",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1",
      fontStyle: "normal"
    }
  },
  cardSmallInfo: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "left"
  },
  img: {
    display: "block",
    maxWidth: "280px",
    maxHeight: "218px",
    align: "center",
    objectFix: "cover",
    margin: "auto"
  },
  card: {
    marginLeft: "100px",
    marginRight: "100px"
  },
  avatar: {
    display: "block",
    width: "140px",
    height: "140px",
    maxWidth: "140px",
    maxHeight: "140px",
    itemAlign: "center",
    objectFix: "cover",
    borderRadius: "10px"
  }
};
class WordScreen extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, history } = this.props;
    return (
      <Grid container direction={"column"}>
        <Grid
          style={{ paddingLeft: "160px", paddingRight: "160px" }}
          container
          direction="row"
        >
          <Grid
            container
            xs={12}
            sm={6}
            md={6}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <img
              className={classes.avatar}
              src="https://www.iamexpat.nl/sites/default/files/styles/article--full/public/oldimages/67cddc45e6e8c166afe752d0b5e0866c1441700680.jpg?itok=1VUc7csy"
              alt="..."
            />
            <Grid item direction="column" alignItems="center" justify="center">
              <p className={classes.topicTitle}>Contract</p>
              <p className={classes.cardCategory}>12 words</p>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            sm={6}
            md={6}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Button
              onClick={() => {
                history.push("/learn");
              }}
              color="success"
            >
              Learn word
            </Button>
            <Button
              onClick={() => {
                history.push("/quiz");
              }}
              color="primary"
            >
              Practice
            </Button>
          </Grid>
        </Grid>
        <GridContainer className={classes.card}>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[0]} />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[1]} />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[2]} />
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.card}>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[3]} />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[4]} />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[5]} />
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.card}>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[6]} />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[7]} />
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <WordCard word={topic2[8]} />
          </GridItem>
        </GridContainer>
      </Grid>
    );
  }
}

WordScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WordScreen);
