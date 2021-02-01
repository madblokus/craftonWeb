import React from 'react'


const Content = ({ title, text, img, cName, linkhref, dataAhrefR, onClick }) => {
    return (
        <>
            <div className={cName}>
                <div className="text-container">
                    <h1 className='group-title'>{title}</h1>
                    <p className='group-text'>{text}<a href={linkhref} className='group-text' id='link-law'>{dataAhrefR}</a></p>


                </div>
                <div className='image-container'>
                    <img src={img} className='image' onClick={onClick} />
                </div>
            </div>
        </>
    )
}

export default Content
