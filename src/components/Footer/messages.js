/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.Footer";

export default defineMessages({
  copyright: {
    id: `${scope}.copyright`,
    defaultMessage: "Jonathan C S Lynn © 2021",
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: "Email",
  },
  github: {
    id: `${scope}.github`,
    defaultMessage: "GitHub",
  },
  linkedin: {
    id: `${scope}.linkedin`,
    defaultMessage: "LinkedIn",
  },
});
