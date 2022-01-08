import { useIntl } from "react-intl";
import WorkItem from "./item";
import Container from "../ResponsiveContainer";
import messages from "./messages";

export default function Work() {
  const { formatMessage } = useIntl();
  return (
    <Container
      id="work"
      sx={{ paddingTop: "15vh", paddingBottom: "84px", minHeight: "100vh" }}
    >
      <WorkItem
        key="youCodia"
        id="01"
        sx={{ borderBottom: "1.5px solid #292929" }}
        videoId="ieRDryJabtI"
        title={formatMessage(messages.youcodia)}
        content={formatMessage(messages.youcodiaContent)}
        moreLink="https://www.youcodia.com/"
      />
      <WorkItem
        key="academy"
        id="02"
        sx={{ paddingTop: 12 }}
        videoId="UK65odJSo6M"
        title={formatMessage(messages.academy)}
        content={formatMessage(messages.academyContent)}
        moreLink="https://www.projectc-ygn.org/youcodia-school"
      />
    </Container>
  );
}
