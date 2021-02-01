import React from 'react'
import { footerGroups } from './footerGroups'



const FooterLinks = () => {
    return (
        <div className="footer-links-div">
            {footerGroups.map((group, index) => {
                return (
                    <>
                        <div className='single-group-links'>
                            <ul key={index}>
                                <a className={group.cName} href={group.url}>
                                    {group.title}

                                </a>


                            </ul>
                            {group.items.map((item, index) => (
                                <ul key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </ul>
                            ))}


                        </div>

                    </>

                )
            })}

        </div>
    )
}

export default FooterLinks

