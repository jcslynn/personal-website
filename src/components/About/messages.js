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
    defaultMessage:
      "Hello, I’m Jonathan Lynn, a full stack software engineer with over 3 years of experience in the education and non-profit industry. Besides working with web and mobile technologies, I am passionate about creating technical solutions that tackle societal issues in marginality, poverty, and inequality through approaches that involve disciplines beyond just computer science.",
  },
  resume: {
    id: `${scope}.resume`,
    defaultMessage: "My Resume",
  },
});
