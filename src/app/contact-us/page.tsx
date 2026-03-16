'use client'
import React, { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Plus, Minus } from 'lucide-react'
import { CONTACT_MAIL } from '@/config'
import { getData } from '@/cores'
import toast, { Toaster } from 'react-hot-toast'
import { useStore } from '@pex-craft/store'
import { AppStore, Store } from '@/store'
import { plans } from '../consultancy/page'

const faqs = [
    {
        q: "How do I start a project with you?",
        a: "First, you can reach out to me through the contact form or email. We'll schedule an initial meeting to discuss your needs and plan the project together."
    },
    { q: "What is the cost of your services?", a: "Pricing depends on the scope and complexity of the project. Contact me for a custom quote." },
    { q: "How much time is typically needed to finish a project?", a: "Timeline varies from 2 weeks to 3 months depending on the requirements." },
    { q: "What sets you apart from your competitors?", a: "My focus on high-performance code and award-winning digital design." }
]

const Page = () => {
    const form = useRef<HTMLDivElement>(null)
    const { plan: _plan, dispatch } = useStore<typeof AppStore.App>(Store.App)
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const onSubmit = () => {
        if (!form.current) return null;

        const { nm, em, msg } = getData(form.current);

        if (!nm) {
            toast.error("Name is required!");
        } else if (!em) {
            toast.error("Email is required!");
        } else if (!msg) {
            toast.error(`Message is required`);
        } else {

            let subject = "";
            let bodyContent = "";
            const plan = plans.find(n => n.id == _plan)

            if (_plan && plan && plan.id) {
                
                const planPrice = typeof plan.monthlyPrice === 'number' ? `$${plan.monthlyPrice}/mo` : plan.monthlyPrice;

                subject = `Consultancy Inquiry: ${plan.name} Plan | ${nm}`;
                bodyContent = `
Dear Team,
You have received a new consultancy inquiry.

SELECTED PLAN:
    Plan Name: ${plan.name}
    Price: ${planPrice}

CLIENT INFO:
    Name: ${nm}
    Email: ${em}

MESSAGE:
${msg}
            `;
            } else {
                subject = `New General Inquiry: ${nm}`;
                bodyContent = `
Dear Team,
You have received a new general message from the contact form.

CLIENT INFO:
    Name: ${nm}
    Email: ${em}

MESSAGE:
${msg}
            `;
            }

            const encodedSubject = encodeURIComponent(subject.trim());
            const encodedBody = encodeURIComponent(bodyContent.trim());

            window.location.href = `mailto:${CONTACT_MAIL}?subject=${encodedSubject}&body=${encodedBody}`;
        }
    };
//     const onSubmit = () => {
//         if (!form.current) return null;
//         console.log(`>>>`,plan)
//         const { nm, em, msg } = getData(form.current)

//         if (!nm) {
//             toast.error("Name is required!");
//         } else if (!em) {
//             toast.error("Email is required!");
//         } else if (!msg) {
//             toast.error(`message is required`);
//         } else {
//             console.log(plan)
//             const subject = encodeURIComponent(`New Business Inquiry: ${nm} | [Project/Consultancy]`);

//             // Structured Professional Body
//             const body = encodeURIComponent(
//                 `Subject: Inquiry Regarding Project / Consultancy Services
// Dear Team,
// You have received a new inquiry through the company contact portal. 

// Name: ${nm}
// Email: ${em}

// The client is interested in:
//     [ ] Full-Scale Project Development
//     [ ] Expert Consultancy Services


// MESSAGE:
// ${msg}

// Note: This is an automated template generated to streamline our response process. 

// Best regards,
// Business Development Team`
//             );

//             window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
//         }

//     }


    return (
        <section className="contact-wrapper">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="contact-container">
                <div className='main-title'>Let's discuss your future product</div>
                <div className="msub">Here's how we can find the best way to get it off the ground</div>
                <hr className="section-divider" />

                <div className="grid-layout">
                    <div className="column-left">
                        <h3 className="sub-heading">Contact Us</h3>

                        <div className="contact-details">
                            <div className="detail-item">
                                <Mail size={18} /> <span>{CONTACT_MAIL}</span>
                            </div>
                            <div className="detail-item">
                                <Phone size={18} /> <span>+1 (234) 567-1234</span>
                            </div>
                            <div className="detail-item">
                                <MapPin size={18} /> <span>455 Oak Street San Francisco, CA 94105</span>
                            </div>
                        </div>
                    </div>

                    <div ref={form} className="column-right">
                        <div className="project-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input name={`nm`} type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name={`em`} type="email" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name={`msg`} placeholder="Type Your Message"></textarea>
                            </div>
                            <button className="btn-submit --btn" onClick={onSubmit}>Send Message</button>
                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

                {/* FAQ Section */}
                <div className="grid-layout">
                    <div className="column-left">
                        {/* <span className="section-badge"></span> */}
                        <h3 className="sub-heading">FAQ</h3>
                    </div>

                    <div className="column-right">
                        <div className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-block ${openFaq === index ? 'active' : ''}`}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <div className="faq-trigger">
                                        <p>{faq.q}</p>
                                        {openFaq == index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                    <div className="faq-body">
                                        <div className="faq-inner">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;