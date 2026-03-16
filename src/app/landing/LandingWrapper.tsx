'use client'
import { ReactNode, useRef } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const LandingWrapper = ({ children }: { children: ReactNode }) => {
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const sectors = gsap.utils.toArray<HTMLElement>('.sector')

        sectors.forEach((sector) => {
            const bgColor = sector.getAttribute('data-bg')
            if (!bgColor) return;

            ScrollTrigger.create({
                trigger: sector,
                start: "top 80%", 
                end: "bottom 80%",
                onEnter: () => {
                    if (typeof document != "undefined") {
                        gsap.to(document.body, { 
                            backgroundColor: bgColor, 
                            duration: 0.8, 
                            ease: "power2.inOut",
                            overwrite: "auto" 
                        })
                    }
                },
                onEnterBack: () => {
                    if (typeof document != "undefined") {
                        gsap.to(document.body, { 
                            backgroundColor: bgColor, 
                            duration: 0.8, 
                            ease: "power2.inOut",
                            overwrite: "auto" 
                        });
                    }
                }
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, { scope: container })

    return (
        // <ReactLenis root options={{ 
        //     lerp: 0.1,
        //     duration: 1.5, 
        //     wheelMultiplier: 0.1,
        //     smoothWheel: true 
        // }}>
            <div ref={container} className="landing-wrapper">
                {children}
            </div>
        // </ReactLenis>
    )
}

export default LandingWrapper