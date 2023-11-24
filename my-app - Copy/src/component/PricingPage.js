// PricingPage.js - Main component for the pricing page
import React from 'react';
import PlanCard from './PlanCard';

const PricingPage = () => {
    const plans = [
        {
            planName: "Basic",
            description: "Individual",
            price: 8,
            features: [
            { text: "Feature 1", disabled: false },
            { text: "Feature 2", disabled: false },
            { text: "Feature 3", disabled: true },
            // Add more features as needed
            ],
        },
        {
            planName: "Standard",
            description: "Small Business",
            price: 20,
            features: [
            { text: "Feature A", disabled: false },
            { text: "Feature B", disabled: false },
            { text: "Feature C", disabled: true },
            // Add more features as needed
            ],
        },
        {
            planName: "Premium",
            description: "Large Companies",
            price: 40,
            features: [
            { text: "Advanced x", disabled: false },
            { text: "Advanced Y", disabled: true },
            { text: "Advanced Z", disabled: false },
            // Add more features as needed
            ]
        },
    ];

return (
    <div className="container-fluid" style={{ background: 'linear-gradient (90deg, #00C9FF 8%, #92FE9D 100%)' }}>
        <div className="container p-5">
            <div className="row">
                {plans.map((plan, index) => (
                    <div key={index} className="col-lg-4 col-md-12 mb-4">
                        <PlanCard {...plan} />
                    </div> 
                ))} 
            </div> 
        </div>
    </div>
 );
}; 

 export default PricingPage;
