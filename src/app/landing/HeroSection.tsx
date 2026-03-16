const HeroSection = () => {
    return (
        <div className={`--hero sector flex jcc cols tc`} data-bg="#e6f5f5">
            {/* <div className="--s1 flex cols jcc"> */}
                <div className="--lines flex cols aic">
                    <h1 className='t1'>transforming your ideas</h1>
                    <h1 className='t2'>into powerful web & app</h1>
                    <h1 className='t2'>solutions</h1>
                    <p>Intuitive Design | Agile Development | End-to-End Support</p>
                </div>
                <button className='--btn p lg asc'>Let's Get Started</button>
            {/* </div> */}

            {/* <div className={`--s2`}></div> */}
        </div>
    )
}

export default HeroSection