import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model S"
          description="Order Online For Touchless Deleveriy"
          backgroundImg="model-s.jpg"
          LeftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model Y"
          description="Order Online For Touchless Deleveriy"
          backgroundImg="model-y.jpg"
          LeftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model 3"
          description="Order Online For Touchless Deleveriy"
          backgroundImg="model-3.jpg"
          LeftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model X"
          description="Order Online For Touchless Deleveriy"
          backgroundImg="model-x.jpg"
          LeftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          LeftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Tan a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          LeftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          LeftBtnText="Shop now"
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
