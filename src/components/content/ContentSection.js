import React, { useState } from 'react'
import './ContentSection.css'
import { firstSection, secondSection, thirdSection } from './contentData'
import Content from './Content'


const ContentSection = () => {

    const [bgModaldisplay, setModalStyle] = useState({})

    const showVid = () => setModalStyle({ display: 'flex' })
    const closeVid = () => {
        setModalStyle({ display: 'none' });
    }
    return (
        <>
            <div className="content-section-whole">
                <section className="first-section">
                    <Content
                        title={firstSection.title}
                        text={firstSection.info}
                        img={firstSection.url}
                        cName={firstSection.cName}
                        linkhref='http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170001575'
                        dataAhrefR='(Dz.U. 2017 poz. 1575).'
                        onClick={''}
                    />

                </section>
                <section className="second-section">
                    <Content
                        title={secondSection.title}
                        text={secondSection.info}
                        img={secondSection.url}
                        cName={secondSection.cName}
                        onClick={''}

                    />
                </section>
                <section className="third-section">
                    <Content
                        title={thirdSection.title}
                        text={thirdSection.info}
                        img={thirdSection.url}
                        cName={thirdSection.cName}
                        onClick={showVid}
                    />

                </section>
            </div>
            <div className="bg-modal" style={bgModaldisplay}>

                <div className="modal-contents">
                    <iframe width="1000" height="570" src="https://www.youtube.com/embed/5XV49ucdGc4?controls=0?modestbranding=1&autoplay=1" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="close" onClick={closeVid}>+</div>
                </div>
            </div>
        </>
    )

}

export default ContentSection
