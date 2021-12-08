/*
 * Layout Messages
 *
 * This contains all the text for the Layout component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.Layout";

export default defineMessages({
  copyright: {
    id: `${scope}.copyright`,
    defaultMessage: "Copyright © 2016–2021 youCodia & Youth Global Network",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      "Hello! I am Jonathan Lynn, a full stack software engineer with over 3 years of experience in the education industry.",
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: "Jonathan Lynn",
  },
});
