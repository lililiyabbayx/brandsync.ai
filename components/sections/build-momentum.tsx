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

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Elevate Your
            <br />
            Elevate Your Content Strategy
          </>
        }
        image="/ideagenerate.webp"
        imageSize="large"
        text="Search for content ideas and specify your preferred content length. Our AI helps you identify the most promising topics for your niche."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Trending Topics",
            text: "Stay ahead of the curve with insights into popular topics within your niche. Visualize trends with bar charts and growth indicators.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "AI-Generated Content Ideas",
            text: "Receive personalized content suggestions based on current trends and your niche, helping you create engaging and relevant posts.",
          },
          {
            icon: WorkflowsIcon,
            title: "Content Performance Prediction",
            text: "Utilize AI to forecast engagement and receive key insights to fine-tune your content strategy for maximum impact",
          },
        ]}
      />
    </Features>
  );
};
