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
    defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  academyContent: {
    id: `${scope}.academyContent`,
    defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
});
