import React, { useState } from 'react'
import styles from './index.module.scss';
import { icons } from '../../../assets';
import Select from '../../../components/select';
import { successSubmission } from '../../../utils/sweetalert';

const Contact = () => {
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const typeData = ['Good', 'Bad'];
    const [comment, setComment] = useState('');

    const contacts = [
        {
            icon: <icons.BiSolidMessageRounded fontSize={27} />,
            message: "Send Feedbacks",
            content: "Chat with our product handlers and agents"
        },
        {
            icon: <icons.IoPeople fontSize={27} />,
            message: "Ask the community",
            content: "Find other to ask queries! connect with our customers"
        },
        {
            icon: <icons.FaHandshake fontSize={27} />,
            message: "Resolution Center",
            content: "Resolve transaction or account issues"
        },
        {
            icon: <icons.IoIosCall fontSize={27} />,
            message: "Call Us",
            content: "We'll answer as soon as we can"
        }]
    const petSet = {
        pet: type,
        setPet: setType
    }
    const submit = () => {
        successSubmission()
        setModal(false)
        setEmail('');
        setType('')
        setComment('')
    }
    return (
        <div className={styles.contactus}>
            <div className={styles.contactus_blur}>
                <div className={styles.contactus_blur_content}>
                    <h2>Contact Us</h2>
                    <div className={styles.contactus_blur_content_cont}>
                        {
                            contacts.map(contact => (
                                <div>
                                    {contact.icon}
                                    <p onClick={() => setModal(true)} className={styles.context}>{contact.message}</p>
                                    <p>{contact.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={modal ? styles.modal : styles.modal_close}>
                <div>
                    <h3>Feedback form</h3>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                    <Select dataSet={typeData} state={'active'} petSet={petSet} />
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Enter comments' />
                    <button onClick={submit}>Submit</button>
                    <div className={styles.cross_icon} onClick={() => setModal(false)}><icons.RxCross2 fontSize={18} /></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
