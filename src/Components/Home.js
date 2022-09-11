import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title = "Model S"
          description = "Order Online For Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
        title = "Model Y"
          description = "Order Online For Touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory" />
        <Section  
          title = "Model 3"
          description = "Order Online For Touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        <Section 
        title = "Model X"
          description = "Order Online For Touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory" />
          <Section
          title = "Lowest Cost Solar Pannel in Pakistan"
          description = "Money-back guranatee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText = "Custom Order "
          rightBtnText = "Learn more" />
           
          <Section
          title = "Solar for new roofs in Pakistan"
          description = "Solar roof cost less than a new Roofs and solar pannel"
          backgroundImg = "solar-roof.jpg"
          leftBtnText = "Learn more"
          rightBtnText = "Shop Now" />
          <Section
          title = "Accessories"
          description = "Accessories"
          backgroundImg = "Accessories.jpg"
          leftBtnText = "Shop Now" />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`