import { MoveUpRight } from 'lucide-react'
import React from 'react'

const Banner = () => {
    return (
        <div className='--banner flex jcb aic'>

            <h1 className='--lbl b900'>Let's Discuss<br /> with our team</h1>
            

            <div className="s2 flex aic">
                <div className='--txt flex aic cols'>
                    <div className='ass b900'>Ready to scale?</div> 
                    <div className='ass'>Connect with our experts for a custom strategy and a free quote.</div>
                </div>

                <div className='btn'>
                    <MoveUpRight />
                </div>
            </div>


        </div>
    )
}

export default Banner