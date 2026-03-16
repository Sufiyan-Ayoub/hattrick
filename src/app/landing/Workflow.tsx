import React from 'react';
import { Rocket, Target, PenTool, Terminal, ShieldCheck, Share2 } from 'lucide-react';

const Workflow = () => {
    const workflow = [
        { 
            title: "Project Kickoff", 
            desc: "The most successful digital products are the results of the collaborative efforts of skilled specialists who work together to develop something truly remarkable.", 
            icon: <Rocket size={20} /> 
        },
        { 
            title: "Requirements Gathering", 
            desc: "By defining objectives and building consensus around a narrow set of KPIs, our product strategists aid in the development of digital experiences.", 
            icon: <Target size={20} /> 
        },
        { 
            title: "Design", 
            desc: "Quick consensus on a technical approach and future-proof framework is achieved through early development right from the outset of a project.", 
            icon: <PenTool size={20} /> 
        },
        { 
            title: "Development", 
            desc: "In most cases, we finish the design cycle and create a prototype far ahead of schedule, giving customers ample time to test assumptions.", 
            icon: <Terminal size={20} /> 
        },
        { 
            title: "Quality Assurance", 
            desc: "Each stage of our procedure is followed by testing and validation. We routinely put our prototypes through their paces in our research labs.", 
            icon: <ShieldCheck size={20} /> 
        },
        { 
            title: "Deployment", 
            desc: "There will be less time devoted to presentations and more to doing actual work. Making digital products at scale without unnecessary delays.", 
            icon: <Share2 size={20} /> 
        }
    ]

    return (
        <section className="sector workflow-sec rel" data-bg="#0a0a0a">
            <div className="container">
                <div className="tc mb-60">
                    <h1 className="s70 b900">
                        Our Execution <span className="text-primary s70">Process</span>
                    </h1>
                </div>
                <div className="workflow-grid">
                    {workflow.map((step, index) => (
                        <div key={index} className="workflow-card flex cols">
                            <div className="icon-wrapper flex aic jcc">
                                {step.icon}
                            </div>
                            <div className='meta flex cols'>
                                <h2 className="s22 b900">{step.title}</h2>
                                <p className="s20">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;