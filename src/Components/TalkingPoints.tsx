import React from "react";
import { TalkingPointsWrapper, TalkingPointsHeading, TalkingPointsUl, TalkingPoint,} from "./Styled";

interface talkingPoint {
    title: string
    description: string
}

const TalkingPoints: React.FC = () => {
    const talkingPoints: talkingPoint[] = [
        {
            title: "Smart Snippets and Recommended Responses",
            description: "aided in the development of a production-ready solution for pluggable and suggested text-snippets in chat systems, which rolled out to 5 different use cases and drove a savings of $3.4MM annually in customer serving time."
        },
        {
            title: "Welcome Organizer",
            description: "delivered functionality to help tax assistants collect and preserve customer information in preparation of the tax experts filing their tax return."
        },
        {
            title: "Smart Compose",
            description: "aided support revolving around our teams initiatives to drive autocompletion functionality in pegasus and triton chats."
        },
        {
            title: "Smart Assign",
            description: "contributed to Intuit Expert Portal (IEP) engagement reassignment capabilities backed by machine learning models."
        },
        {
            title: "Send-message Widget",
            description: "maintained a widget offering tax assistants and experts capabilities to send recommended emails stored in wordpress to support customer engagements for filing tax returns."
        },
        {
            title: "Prep4prep",
            description: "helped the redevelopment of collecting customer pii data securely in efforts of preparing necessary information for filing taxes before the customer met with tax assistants and experts."
        },
        {
            title: "Wordpress",
            description: "maintained and formed a migration plan to update Wordpress version from HELIX to GUTENBERG to support our send message and smart snippets widgets."
        },
        {
            title: "IXP",
            description: "orchestrated and maintained A/B tests and feature flag experiments rolling out new features and baselined features after performing vigorous smoke tests with various stakeholders across our teams software fixing squashing any bugs along the process."
        },
        {
            title: "OINP",
            description: "debugged and reconfigured existing notifications in place for tax collection purposes spanning across email and multiple device support."
        },
        {
            title: "Intuit Design System (IDS)",
            description: "consumed existing Intuit designed React components in a handful of widgets mentioned above."
        },
        {
            title: "Splunk",
            description: "established monitoring dashboards and alerts to bolster data-driven business decisions."
        },
        {
            title: "Pagerduty",
            description: "took initiative to organize my team’s PagerDuty rotation in the initiative of helping customers have seamless experiences using Intuit’s products."
        },
        {
            title: "Continuous Integration and Test Driven Development",
            description: "increased quality standards and metrics on team by integrating with Jest unit and Cypress integration tests into CI/CD for all projects, eliminating bugs before merge and reducing time in code review and smoke testing."
        },
    ];

    return (
        <TalkingPointsWrapper>
            <TalkingPointsHeading>Here are some of my achievements and talking points for us
                today:</TalkingPointsHeading>
            <TalkingPointsUl>
                {talkingPoints.map((point, index) => {
                    return <TalkingPoint key={index}><strong>{point.title}</strong>: {point.description}</TalkingPoint>;
                })}
            </TalkingPointsUl>
        </TalkingPointsWrapper>
    );
};

export default TalkingPoints;
