import { APP_NAME } from '@/config'

const Team = () => {

    return (
        <div
            className="sector sec-e rel flex c111 jc"
            data-bg="#c0ddff"
        >
            <div
                className="poster"
                style={{ backgroundImage: "url('/imgs/team.png')" }}
            >
                <h1 className="s100 cfff b900">We are {APP_NAME}.</h1>
            </div>

            <div className="features flex cols">
                <div className="item flex cols">
                    <h1 className="lbl s100 b900">№1</h1>
                    <p className="para s18">
                        In terms of Design & Build quality. According to the rating of Smart Ranking.
                    </p>
                </div>

                <div className="item flex cols">
                    <h1 className="lbl s100 b900">15+ Years</h1>
                    <p className="para s18">
                        {APP_NAME} has been transforming innovative ideas into exceptional digital solutions.
                        We're proud to continue serving our clients with unmatched expertise and dedication.
                    </p>
                </div>

                <div className="item flex cols">
                    <h1 className="lbl s100 b900">24/7</h1>
                    <p className="para s18">
                        Support group is ready to help you if you have questions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team