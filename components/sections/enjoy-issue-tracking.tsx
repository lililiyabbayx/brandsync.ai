"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Unlock Powerful Partnerships
            <br />
            Connect who resonate with your brand’s voice
          </>
        }
        image="/exploreinfluencer.webp"
        text="Our AI-driven system provides a curated list of potential partners, complete with detailed analytics and video previews. Initiate contact with personalized emails and engage with influencers who are ready to amplify your brand."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "AI-Powered Matching",
            text: "Find the perfect match with smart algorithms that connect you with relevant partners based on niche, engagement, and preferences.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Customizable Dashboards",
            text: "Access personalized dashboards for both creators and businesses, displaying key metrics and insights for informed decision-making.",
          },
          {
            icon: WorkflowsIcon,
            title: "Seamless Communication",
            text: "Generate auto-populated, customizable emails to streamline outreach and collaboration.",
          },
          {
            icon: CustomViewsIcon,
            title: "Match Percentage",
            text: "View a match percentage for each potential collaboration, helping you prioritize the best opportunities.",
          },
          {
            icon: DiscussionIcon,
            title: "Content Research Tools",
            text: "Gain insights into trending content and keywords to refine your strategy and stay ahead in your niche.",
          },
          {
            icon: IssuesIcon,
            title: "Success Potential Analysis",
            text: "Evaluate the likelihood of successful collaborations with our AI-generated success scores and predictions.",
          },
        ]}
      />
    </Features>
  );
};
