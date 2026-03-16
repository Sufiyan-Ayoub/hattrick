'use client'
import PremiumPlan, { Plan } from "./Plan"
import Banner from "../landing/Banner";
import { useRouter } from "next/navigation";
import { useStore } from "@pex-craft/store";
import { AppStore, Store } from "@/store";

export const plans: Plan[] = [
    {
        id: 1,
        name: "Lite",
        description: "Essential guidance for startups.",
        monthlyPrice: 100,
        yearlyPrice: 76080,
        features: [
            "1-hour initial consultation and needs assessment.",
            "Recommendations for selecting the right platform.",
            "Basic SEO strategy for improved online visibility.",
            "Simple website layout and structure guidance.",
            "Tips for creating compelling content.",
            "Introduction to free/affordable management tools.",
            "Follow-up email support for 1 week."
        ],
    },
    {
        id: 2,
        name: "Plus",
        description: "Strategy for growing brands.",
        monthlyPrice: 272, 
        yearlyPrice: 2720 * 12,
        popular: true, 
        features: [
            "2-hour consultation with tailored strategy report.",
            "Guidance on website enhancements & UI/UX optimization.",
            "Intermediate SEO with targeted keywords.",
            "Social media and digital marketing insights.",
            "E-commerce setup advice (payments, products).",
            "Guidance on implementing analytics tools.",
            "Follow-up support via email for 2 weeks."
        ],
    },
    {
        id: 3,
        name: "Max",
        description: "Solutions for large enterprises.",
        monthlyPrice: "Customize",
        yearlyPrice: "Customize",
        features: [
            "4-hour in-depth consultation and roadmap.",
            "Full website audit with actionable recommendations.",
            "Advanced SEO and content marketing strategy.",
            "Custom e-commerce solutions & conversion optimization.",
            "Data analytics review for informed decision-making.",
            "Social media and advertising campaign planning.",
            "Priority email and phone support for 1 month."
        ],
    }
];
const Page = () => {
    const router = useRouter()
    const { dispatch } = useStore<typeof AppStore.App>(Store.App)

    return (
        <div className={`--consultancy-pg flex cols`}>

            <div className="--lines flex cols">
                <h1 className="--lbl s40 b900">Scale your digital future.</h1>
                <p className="--txt s20">
                    Expert technical advisory to modernize your stack and accelerate growth.
                </p>
            </div>


            <div className="--plans flex">
                {
                    plans.map((plan, index) => (
                        <PremiumPlan 
                            key={index} 
                            plan={plan} 
                            onSelect={() => {
                                dispatch({ plan: plan.id })
                                router.push(`/contact-us`)
                            }}
                        />
                    ))}
            </div>

            <Banner />
        </div>
    )
}

export default Page