/*
 * Heading Messages
 *
 * This contains all the text for the Heading component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.Heading";

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: "Jonathan Lynn",
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: "Full Stack Software Engineer | Educator",
  },
  myWork: {
    id: `${scope}.myWork`,
    defaultMessage: "My Work",
  },
});
