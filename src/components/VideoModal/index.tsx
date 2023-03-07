import React, {useState} from 'react'

const VideoModal = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    };


    // @ts-ignore
    return (
        <div className="v-modal-area">
            <div className="video-btn">
                <ul>
                    <li>
                        <button className="wrap" onClick={openModal}><i className="fi flaticon-play"></i></button>
                    </li>
                </ul>
            </div>
            <div className="v-modal-wrap">
                {modal ? (
                    <section className="modal__bg">
                        <button onClick={openModal} className="close">
                            <i className='fa fa-close'></i>
                        </button>
                        <div className="modal__align">
                            {/*@ts-ignore*/}
                            <div className="modal__content" modal={modal}>
                                <div className="modal__video-align">
                                    <iframe
                                        className="modal__video-style"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/RKbeEs_SamE"
                                        title="Jhansel Talks Tax Incentives"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
            </div>
        </div>
    )
}

export default VideoModal;