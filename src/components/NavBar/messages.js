/*
 * NavBar Messages
 *
 * This contains all the text for the NavBar component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.NavBar";

export default defineMessages({
  work: {
    id: `${scope}.work`,
    defaultMessage: "Work",
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: "About me",
  },
});
