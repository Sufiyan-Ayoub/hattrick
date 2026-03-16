import Link from "next/link"
import { FC } from "react"

const MobileMenu: FC<{ navLinks: {
    label: string;
    uri: string;
    icon: string;
}[]}> = ({ navLinks }) => {
    return (
        <div className="mob-nav-overlay">
            <div className="mob-nav-container flex cols aic jcc">
                {navLinks.map((m) => (
                    <Link 
                        key={`mob-nav-key-${m.uri}`} 
                        href={{ pathname: m.uri }} 
                        className="mob-nav-link s24 b900 tdn"
                    >
                        {/* Label wraps text so clicking it unchecks the checkbox */}
                        <label htmlFor="mob-menu-ctrl" style={{ cursor: 'pointer' }}>
                            {m.label}
                        </label>
                    </Link>
                ))}
                
                <div className="mob-nav-footer mt20">
                    <Link href="/contact-us" className="--btn lg tdn">
                        <label htmlFor="mob-menu-ctrl" style={{ cursor: 'pointer' }}>
                            Contact Us
                        </label>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu