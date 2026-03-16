import { APP_NAME } from '@/config'

const Page = () => {
    return (
        <div className={`--about-pg`}>
            <div className="--lines flex cols">
                <h1 className='s40 b900'>About Us</h1>
                <p className="s20">
                    Welcome to {APP_NAME}.
                    your trusted partner in creating innovative web solutions.
                    We empower businesses through exceptional digital experiences.
                </p>
            </div>


            
            {
                [
                    { q: `Who We Are`, a: `At ${APP_NAME}, we believe in the power of creativity, technology, and collaboration. Our team consists of talented designers, developers, and strategists who are committed to delivering outstanding results for our clients.` },
                    { q: `What We Do`, a: `We specialize in designing and developing bespoke web applications tailored to meet the unique needs of each client. From concept to execution, we work closely with our clients to understand their vision and transform it into a stunning digital reality.` },
                    { q: `Why Choose Us`, a: `Our team brings years of experience and expertise to every project we undertake. We stay updated with the latest technologies and trends to ensure that our solutions are always cutting-edge.We believe in fostering strong partnerships with our clients based on trust, transparency, and open communication. Your success is our success, and we work tirelessly to exceed your expectations.We are committed to delivering top-quality work that not only meets but exceeds industry standards. From design to development, we strive for excellence in everything we do.Our relationship doesn't end once the project is delivered. We provide ongoing support and maintenance to ensure that your digital assets continue to perform at their best.` },
                    { q: `Our Mission`, a: `Our mission is to empower businesses of all sizes to thrive in the digital landscape. We are passionate about helping our clients achieve their goals and realize their full potential through innovative web solutions.` },
                    { q: `Get in Touch`, a: `Ready to take your digital presence to the next level? Contact us today to discuss how we can help you achieve your goals.` },
                ].map((n, i) => <div key={`hab${i}`} className='--lines flex cols' style={{ marginTop: `20px` }}>
                    <h1 className='s22 b900'>{n.q}</h1>
                    <p className='s20'>{n.a}</p>
                </div>)
            }


        </div>
    )
}

export default Page