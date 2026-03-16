'use client'
import React, { MouseEvent } from 'react';
// import './PremiumPlqan.scss';
import { Zap, ArrowRight, Check } from 'lucide-react';

export type Plan = {
    id: number;
    name: string;
    description: string;
    monthlyPrice: number | string;
    yearlyPrice: number | string;
    popular?: boolean;
    features: string[];
}

const PremiumPlan: React.FC<{
    plan: Plan,
    onSelect: (ev: MouseEvent<HTMLButtonElement>) => void
}> = ({ plan, onSelect }) => {

    return (
        <div className={`--plan-wrapper flex cols rel ${plan.popular ? 'is-popular' : ''}`}>
            <div className="--badge-line abs flex aic jcc">
                <Zap size={14} fill="currentColor" />
                <span>{plan.description}</span>
            </div>

            <div className="--card rel flex cols">
                <div className="--ch flex cols aic">
                    <div className="title-group">
                        <Zap size={24} className="icon-bolt" />
                        <h2 className="plan-name">{plan.name}</h2>
                    </div>
                    <p className="plan-desc">{plan.description}</p>
                    <div className="horizontal-divider" />
                    
                    <div className="price-container">
                        <span className="s50 b900">{typeof plan.monthlyPrice == `string` ? plan.monthlyPrice :`$${plan.monthlyPrice}`}</span>
                        <span className="price-period">{typeof plan.monthlyPrice == `string` ? `` : `/mo`}</span>
                    </div>
                    
                    {/* {isYearly && (
                        <p className="savings-alert">
                            Billed annually (save ${savings}/year)
                        </p>
                    )} */}
                </div>

                
                <button className="--btn flex aic jcc" onClick={onSelect}>
                    <div className='tc s20 b900'>Get Started</div>
                    <ArrowRight size={20} />
                </button>
            
                <div className="features-list">
                    {plan.features.map((feature, idx) => (
                        <div key={`fetu-p-${idx}`} className="feature-row">
                            {feature.includes("Everything in") ? (
                                <div className="spacer-mt" />
                            ) : (
                                <div className={`check-circle ${plan.popular ? 'bg-primary' : 'bg-green'}`}>
                                    <Check size={12} color="#fff" />
                                </div>
                            )}
                            <span className={`feature-text ${feature.includes("Everything in") ? "is-bold" : ""}`}>
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PremiumPlan