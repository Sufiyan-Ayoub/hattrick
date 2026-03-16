'use client'
import { Project } from '@/types';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const projects: Project[] = [
    {
        id: 1,
        title: "Eco-Friendly Dashboard",
        category: "Web Application",
        description: "A comprehensive sustainability tracking platform for green startups to monitor their carbon footprint.",
        images: [
            "/pimgs/p1/p101.png",
            "/pimgs/p1/p102.webp",
            "/pimgs/p1/p103.webp",
            "/pimgs/p1/p104.webp"
        ]
    },
    {
        id: 2,
        title: "Crypto Wallet v2",
        category: "Blockchain & Fintech",
        description: "A secure, multi-chain cryptocurrency wallet focusing on seamless UI and advanced encryption standards.",
        images: [
            "/pimgs/p2/p201.png",
            "/pimgs/p2/p202.png",
            "/pimgs/p2/p203.png"
        ]
    },
    {
        id: 3,
        category: "Web Design",
        title: "Etec Premium Accessories",
        description: "A minimalist and high-end lifestyle store for premium electronic accessories with a focus on clean UI and seamless user experience.",
        images: [
            "/pimgs/p3/1.png",
            "/pimgs/p3/2.webp",
            "/pimgs/p3/3.webp"
        ]
    },
    {
        id: 4,
        title: "Intoriee - Interior Design",
        category: "Architecture & Design",
        description: "A sophisticated portfolio showcase for luxury interior design services, highlighting the art of creating elegant and functional living spaces.",
        images: [
            "/pimgs/p4/1.png",
            "/pimgs/p4/2.webp",
            "/pimgs/p4/3.webp"
        ]
    },
    {
        id: 5,
        title: "Saleszilla SaaS Platform",
        category: "SaaS & Business",
        description: "An advanced sales automation and CRM dashboard designed to optimize business performance and lead tracking.",
        images: [
            "/pimgs/p5/1.png",
            "/pimgs/p5/2.png",
            "/pimgs/p5/3.png",
            "/pimgs/p5/4.png"
        ]
    },
    {
        id: 6,
        title: "Consult Premium Template",
        category: "Mobile",
        description: "A premium mobile-responsive template for business consultancies, featuring a professional layout for services and client testimonials.",
        images: [
            "/pimgs/p6/1.png",
            "/pimgs/p6/2.png",
            "/pimgs/p6/3.png"
        ]
    },
    {
        id: 7,
        title: "Lumora - Ecommerce Platform",
        category: "Web3",
        description: "",
        stack: [],
        images: [
            "/pimgs/p6/1.png",
            "/pimgs/p6/2.png",
            "/pimgs/p6/3.png"
        ]
    }
];

const Page = () => {
    const router = useRouter()
    const [filter, setFilter] = useState('All')

    const categories = ['All', 'Web Design', 'Mobile', 'Branding']

    const filteredProjects = filter == 'All' 
        ? projects 
        : projects.filter(p => p.category == filter)

    return (
        <section className="--work flex cols">
            
            <div className="--whero flex cols aic">
                <h1 className="--lbl b900 tc">Discover your next idea.</h1>
                <h1 className='--txt tc'>Handpicked design resources to accelerate your creative workflow</h1>
                
                <div className="--filters flex aic jcc">
                    {categories.map((cat, inx) => (
                        <button 
                            key={`${cat}-${inx}`} 
                            className={filter == cat ? '--active --btn' : '--btn'} 
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="--showcase-grid">
                {filteredProjects.map((project, inx) => (
                    <div key={`${project.id}-${inx}`} className="--showcase-card">
                        <div className="image-wrapper">
                            <img src={project.images[0]} alt={project.title} />
                            <div className="overlay">
                                <button className="view-btn" onClick={() => router.push(`/work/${project.id}`)}>View Project</button>
                            </div>
                        </div>
                        <div className="--meta flex aic jcb">
                            <h1 className='--lbl'>{project.title}</h1>                            
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Page