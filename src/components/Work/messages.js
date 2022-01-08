/*
 * NavBar Messages
 *
 * This contains all the text for the NavBar component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.NavBar";

export default defineMessages({
  more: {
    id: `${scope}.more`,
    defaultMessage: "More info about this project ",
  },
  youcodia: {
    id: `${scope}.youcodia`,
    defaultMessage: "youCodia",
  },
  academy: {
    id: `${scope}.academy`,
    defaultMessage: "youCodia Academy",
  },
  youcodiaContent: {
    id: `${scope}.youcodiaContent`,
    defaultMessage: "An all-in-one classroom management and visual app-development platform based on MIT AppInventor for programming teachers and students.",
  },
  academyContent: {
    id: `${scope}.academyContent`,
    defaultMessage: "An inclusive training program for youth to receive vocational skills in computer programming and holistic development through mentorship."  },
});
