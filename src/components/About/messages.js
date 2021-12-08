/*
 * About Messages
 *
 * This contains all the text for the About component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.About";

export default defineMessages({
  top: {
    id: `${scope}.top`,
    defaultMessage: "Back to top",
  },
  alt: {
    id: `${scope}.alt`,
    defaultMessage: "Jonathan Lynn",
  },
  content: {
    id: `${scope}.content`,
    defaultMessage: "Hello, I’m Jonathan Lynn, a full stack software engineer with over 3 years of experience in the education industry.",
  },
  resume: {
    id: `${scope}.resume`,
    defaultMessage: "Resume",
  }
});
