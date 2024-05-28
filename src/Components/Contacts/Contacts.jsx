import './Contacts.css'
import React from 'react'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contacts(){
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left Side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you. We beleive a good blace to live can make you life better</span>


                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            {/* first mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>

                                <button className="flexCenter button">Call Now</button>

                            </div>

                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>

                                <button className="flexCenter button">Chat Now</button>

                            </div>

                        </div>

                        {/* Second row */}
                        <div className="flexStart row">
                            {/* third mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>

                                <button className="flexCenter button">Video Call Now</button>

                            </div>

                            {/* forth mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>

                                <button className="flexCenter button">Message Now</button>

                            </div>

                        </div>
                    </div>
                </div>

                {/* right side */}

                <div className="flexEnd c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
