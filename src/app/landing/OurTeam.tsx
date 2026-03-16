import { FC } from "react"

const OurTeam: FC<{ noPg?: boolean }> = ({ noPg=false }) => {
    return (
        <div className='--our-team sector flex cols' {...(noPg ? { style: { paddingInline: 0 }} : {})} data-bg="#c0ddff">
            <div className="--lines flex cols aic">
                <h1 className='s50 b900 tc'>Meet our team</h1>
                <h1 className='s22 tc'>Our team of experts is here to help you achieve your goals.</h1>
            </div>
            <div className='members'>

                {Array.from({ length: 10 }).map((n, i) => <div key={`team-c-${i}`} className='--card'>
                    <div className='--graphic'>
                        <img src={`/imgs/team.png`} />
                    </div>
                    <div className="--meta">
                        <h1 className='b900'>Sufiyan Ayoub</h1>
                        <div className='--txt b900'>FullStack Developer</div>
                    </div>
                </div>)}
            </div>

        </div>
    )
}

export default OurTeam