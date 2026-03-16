import { CONTACT_MAIL, PHONE_NUMBER } from '@/config'
import { FC } from 'react'

const TopBar: FC = () => {
    return (
        <div className={`--bar flex aic jcb`}>
            <div className={`flex aic`}>
                <span>{PHONE_NUMBER}</span>
                <span>{CONTACT_MAIL}</span>
            </div>
            <div>
                INSTA_PLACEHOLDER
            </div>
        </div>
    )
}

export default TopBar