import { Rocket } from 'lucide-react'

const Innovation = () => {
    return (
        <div
            className="--innovation sector rel"
            data-bg="#c2decf"
        >
            <h1 className="s70 b900 heading">
                <span className="dark-green s70">Innovation and <br /> Expertise</span> at the Heart of Everything We Do
            </h1>
            <h1 className="s24 heading2">
                At our core, we blend innovation and expertise to fuel every project, striving to pioneer digital solutions that redefine success.
            </h1>

            <div className="sub-section black flex aic">
                <div className="sx flex cols">
                    <div className="ico flex ass jcc aic">
                        <Rocket className={`s24`} />
                    </div>
                    <h1 className="s40 b900 cfff t1">Our Mission to Transform Your Digital Future</h1>
                    <p className="s20 cfff opacity-75">
                        At the heart of our ethos lies a powerful mission to empower businesses with cutting-edge digital strategies. We're committed to igniting their path to success and fostering sustainable growth through expertise.
                    </p>
                </div>

                <div className="sy flex aic jc">
                    <img src="/imgs/inovation.svg" alt="Innovation illustration" />
                </div>
            </div>
        </div>
    )
}

export default Innovation;