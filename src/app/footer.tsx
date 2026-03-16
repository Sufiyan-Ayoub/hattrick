import { Twitter, Linkedin, Github } from 'lucide-react'
import { APP_DESCRIPTION, APP_NAME } from '@/config'
import Link from 'next/link';

const Footer = () => {
    const nav = [
        {
            title: "Expertise",
            links: [
                { label: "Custom Software", url: "#" },
                { label: "Cloud Solutions", url: "#" },
                { label: "Cyber Security", url: "#" },
                { label: "AI Integrations", url: "#" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About Us", url: "/about-us" },
                { label: "Our Work", url: "/work" },
                { label: "Our Team", url: "/our-team" },
                { label: "Contact Us", url: "/contact-us" }
            ]
        }
    ]

    const socialLinks = [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Github size={18} />, url: "#" }
    ]

    const legalLinks = [
        { label: "Privacy Policy", url: "#" },
        { label: "Terms of Service", url: "#" },
        { label: "Cookie Policy", url: "#" }
    ]

    return (
        <div className="--footer sector">
            <div className="--ftr-grid">
                <div className="n1 flex cols"> 
                    <h1 className='s20 b900'>{APP_DESCRIPTION}</h1>
                    <div className="--socials flex">
                        {socialLinks.map((soc, idx) => (
                            <Link key={`fft-`+idx} href={soc.url == `#` ? `#` :{ pathname: soc.url }} className="social-link">
                                {soc.icon}
                            </Link>
                        ))}
                    </div>
                    
                </div>
                <div className="--ftr-nav-group">
                    {nav.map((group, idx) => (
                        <div key={idx} className="--ftr-c flex cols">
                            <h4 className="--ftr-lbl s18">{group.title}</h4>
                            <ul className="--flist">
                                {group.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link className='s15' href={link.url == `#` ? `#` : { pathname: link.url }}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
            <h1 className={`--lh b900 tc`}>{APP_NAME}</h1>
        </div>
    )
}

export default Footer;