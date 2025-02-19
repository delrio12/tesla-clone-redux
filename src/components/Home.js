import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting inventory"    
                />
                
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting inventory"    
                />
                
            <Section    
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting inventory"    
                />
                
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exisiting inventory"    
                />    

            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"    
            />  
            <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"    
            />  
            <Section 
                title="Accesories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />  

        </div>
    )
}

export default Home
