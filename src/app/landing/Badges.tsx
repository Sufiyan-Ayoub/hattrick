import { FC } from 'react'

const Badges: FC = () => {
    return (
        <div className={`--badges sector flex aic jcb`} data-bg="#e6f5f5">
            <h1 className={`b900`}>Recognized<br/> by Industry Leaders</h1>
            <div className={`flex aic jcb`}>
                {
                    [
                        `/imgs/1.png`,
                        `/imgs/2.png`,
                        `/imgs/3.png`,
                        `/imgs/4.png`
                    ].map((u, inx) => <img  key={`--bdg-${inx}`} src={u}  />)
                }
            </div>
        </div>
    )
}

export default Badges