'use client'
import { APP_NAME } from "@/config"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "./mob-header"

const nav = [
    { label: `Home`, uri: `/`, icon: `` },
    { label: `Our Work`, uri: `/work`, icon: `` },
    { label: `Consultancy`, uri: `/consultancy`, icon: `` },
]

const Header = () => {
    const pathname = usePathname()

    return (<>
        <input type="checkbox" id="mob-menu-ctrl" className="mob-menu-input" />
        <div className={`--header flex aic rel`}>
            <div className={`--logo flex aic`}>
                <Link href={`/`}>
                    <img src={`/imgs/logo.png`} />
                </Link>
            </div>
            <div className={`--nav flex aic jcc mob-hide`}>
                {
                    nav.map((m, i) => {
                        const isActive = m.uri == '/' 
                            ? pathname == '/' 
                            : pathname.startsWith(m.uri);
                        return <Link key={`${i}-${m.uri}`} href={{ pathname: m.uri }} className={ isActive ? `--active`: ``}>{m.label}</Link>
                    })
                }
            </div>
            <div className={`--user flex aic jce mob-hide`}>
                <Link href={{ pathname: `/contact-us` }} className={`--btn flex aic tdn`}>
                    Contact Us
                </Link>
            </div>

            <label htmlFor="mob-menu-ctrl" className="mob-toggle-btn">
                <span className="hamburger-icon"></span>
            </label>
        </div> 
        <MobileMenu navLinks={nav} />
    </>)
}

export default Header