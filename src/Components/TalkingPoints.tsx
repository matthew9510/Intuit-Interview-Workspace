import React from "react";
import { TalkingPointsWrapper } from "./Styled";

const TalkingPoints: React.FC = () => {
  const talkingPoints: string[] = [
    "Smart assign",
    "Welcome Organizer",
    "Smart Snippets and Recommended Responses sub feature",
    "Send-message widget (Formed a migration plan - HELIX TO GUTENBERG)",
    "Prep4prep",
    "Smart compose",
    "Wordpress",
    "IXP",
    "OINP",
    "IDS",
    "Splunk",
    "Pagerduty",
    "Continuous Integration",
    "Unit Tests using Testing Library and Jest",
    "Integration tests using Cypress"
  ];

  return (
    <TalkingPointsWrapper>
      <h2>Here are some talking points for us today:</h2>
      <ul>
        {talkingPoints.map((point, index) => {
          return <li key={index}>{point}</li>;
        })}
      </ul>
    </TalkingPointsWrapper>
  );
};

export default TalkingPoints;
