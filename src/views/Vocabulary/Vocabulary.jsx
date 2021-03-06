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
import CardAvatar from "components/Card/CardAvatar.jsx";
import avatar from "assets/img/faces/marc.jpg";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";
import TopicCard from "./VocabularyCard";
import { Grid } from "@material-ui/core";

const styles = {
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
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
    fontSize: "18px",
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
  cardTitle: {
    color: "#00BCD4",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "26px",
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
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  img: {
    display: "block",
    width: "280px",
    height: "218px",
    maxWidth: "280px",
    maxHeight: "218px",
    align: "center",
    objectFix: "cover"
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
  },
  textTotalAnswer: {
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "12px",
    textDecoration: "none",
    fontSize: "36px",
    textAlign: "center",
    verticalAlign: "center"
  },
  textCorrectAnswer: {
    color: "#46C00D",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "12px",
    textDecoration: "none",
    fontSize: "30px",
    textAlign: "center",
    verticalAlign: "center"
  },
  textIncorrectAnswer: {
    color: "#D8585E",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "12px",
    textDecoration: "none",
    fontSize: "30px",
    textAlign: "center",
    verticalAlign: "center"
  }
};
class Vocabulary extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  gotoWord = () => {
    this.props.history.push("/word");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          style={{ paddingLeft: "160px", paddingRight: "160px" }}
          container
          direction="row"
        >
          <Grid item xs={12} sm={6} md={3} alignItems="center" justify="center">
            <img className={classes.avatar} src={avatar} alt="..." />
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            md={3}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <p className={classes.textTotalAnswer}>Total answer</p>
            <p className={classes.textTotalAnswer}>30</p>
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            md={3}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <p className={classes.textCorrectAnswer}>Correct</p>
            <p className={classes.textCorrectAnswer}>15</p>
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            md={3}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <p className={classes.textIncorrectAnswer}>Wrong</p>
            <p className={classes.textIncorrectAnswer}>15</p>
          </Grid>
        </Grid>
        <GridContainer>
          {TopicData.map((value, id) => {
            return (
              <GridItem
                onClick={() => {
                  this.gotoWord();
                }}
                xs={12}
                sm={6}
                md={4}
                key={id}
              >
                <TopicCard topic={value} />
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    );
  }
}

Vocabulary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Vocabulary);
