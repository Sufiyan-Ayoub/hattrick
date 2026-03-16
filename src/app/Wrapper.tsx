'use client'
import { FC, ReactNode, useRef } from 'react'
import Header from './header'
import Footer from './footer'
// import TopBar from './TopBar'
import gsap from 'gsap'
import { ReactLenis } from '@studio-freight/react-lenis'
// import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import createStore from "@pex-craft/store"
import { AppStore, Store } from '@/store'
gsap.registerPlugin(ScrollTrigger)


const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const { Provider } = createStore(Store.App, AppStore.App)
    // const container = useRef<HTMLDivElement>(null)

    // useGSAP(() => {
    //     const sectors = gsap.utils.toArray<HTMLElement>('.sector')

    //     sectors.forEach((sector) => {
    //         const bgColor = sector.getAttribute('data-bg')
    //         if (!bgColor) return;

    //         ScrollTrigger.create({
    //             trigger: sector,
    //             start: "top 80%",
    //             end: "bottom 80%",
    //             onEnter: () => {
    //                 if (typeof document != "undefined") {
    //                     gsap.to(document.body, {
    //                         backgroundColor: bgColor,
    //                         duration: 0.8,
    //                         ease: "power2.inOut",
    //                         overwrite: "auto"
    //                     })
    //                 }
    //             },
    //             onEnterBack: () => {
    //                 if (typeof document != "undefined") {
    //                     gsap.to(document.body, {
    //                         backgroundColor: bgColor,
    //                         duration: 0.8,
    //                         ease: "power2.inOut",
    //                         overwrite: "auto"
    //                     });
    //                 }
    //             }
    //         })
    //     })

    //     return () => {
    //         ScrollTrigger.getAll().forEach(t => t.kill())
    //     }
    // }, { scope: container })

    return (
        <Provider>
            <div className='--app flex cols'>
                {/* <TopBar /> */}
                <Header />
                <ReactLenis root options={{
                    lerp: 0.1,
                    duration: 1.5,
                    wheelMultiplier: 0.7,
                    smoothWheel: true
                }}>
                    <div className={`--content flex`}>
                        {children}
                    </div>
                </ReactLenis>
                <Footer />
            </div>
        </Provider>
    )
}

export default Wrapper