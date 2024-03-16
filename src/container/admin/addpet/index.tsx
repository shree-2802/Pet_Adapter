import React, { ChangeEvent, Children, MouseEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import ImageSlider, { animalsPropsType, imageSliderType } from '../../../components/ImageSlider'
import { availableOptions, breeds, pets } from '../../../constants/data'
import { availableOptionsType } from '../../../components/description'
import styles from './index.module.scss';
import Select from '../../../components/select';
import { emailInvalid, inputErr, missingAlert, submitionSuccess } from '../../../utils/sweetalert';

const AddPet = () => {
    let animals: animalsPropsType = {} as animalsPropsType;
    let opt: availableOptionsType = availableOptions;
    const [email, setEmail] = useState('')
    const [type, setType] = useState('');
    const [pet, setPet] = useState('');
    const [breed, setBreed] = useState('');
    const [image, setImage] = useState<FileList | null>(null);
    const [text, setText] = useState('');
    Object.keys(opt).forEach((item: string) => {
        animals = {
            ...animals,
            [item]: opt[item].image
        }
    })
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const typeSet = {
        pet: type, setPet: setType
    }
    const petSet = {
        pet, setPet
    }

    const clickFuntion = () => {
        if (email) {
            return { Children }
        }
        else {
            missingAlert()
        }
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("hiii ", e)
        e.preventDefault();
        if (hiddenFileInput && hiddenFileInput.current)
            hiddenFileInput.current?.click();
    };
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("hii");
        console.log(" fydyf ", e)
        const files = e.target.files;
        if (files && files.length > 0) {
            setImage(files);
        }
        else {
            setImage(null)
        }
    };

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email === '' || type === '' || pet === "" || breed === '' || image === null || text === '') {
            console.log(email, type, pet, breed, image, text)
            inputErr()
        }
        if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            submitionSuccess()
            setEmail(""); setType(""); setPet(""); setBreed(""); setImage(null); setText("")
        }
        else {
            emailInvalid()
        }
    }

    return (
        <div className={styles.addpet}>
            <form>
                <div>
                    <h3>Pet Addition Form</h3>
                    <input placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Select dataSet={['pet', 'breed']} state={email ? "active" : "inactive"} petSet={typeSet} onClickFuntion={clickFuntion} />
                    {
                        type !== '' && (
                            type === 'breed' ?
                                <>
                                    <Select dataSet={Object.keys(pets)} state={'active'} petSet={petSet} />
                                    {
                                        pet && <>
                                            <input type="text" placeholder={`Enter the ${type} name`} value={breed} onChange={(e) => { setBreed(e.target.value) }} />
                                            <div className={styles.addpet_imageUpload}>
                                                <p>{image ? "uploaded" : "Image of the pet"}</p>
                                                <button className="button-upload" onClick={(e) => handleClick(e)}>
                                                    Upload
                                                </button>
                                            </div>
                                            <input type='file' placeholder='Enter image' ref={hiddenFileInput} style={{ display: "none" }} onChange={(e) => handleImageChange(e)} />
                                            <textarea placeholder='Enter about breed in 2 lines' value={text} onChange={(e) => setText(e.target.value)} />
                                        </>
                                    }
                                </> :
                                <>
                                    <input type='text' placeholder='Enter the pet ' onChange={(e) => setPet(e.target.value)} />
                                    <input type="text" placeholder={`Enter the breed name`} value={breed} onChange={(e) => { setBreed(e.target.value) }} />
                                    <div className={styles.addpet_imageUpload}>
                                        <p>{image ? "uploaded" : "Image of the pet"}</p>
                                        <button className="button-upload" onClick={(e) => handleClick(e)}>
                                            Upload
                                        </button>
                                    </div>
                                    <input type='file' placeholder='Enter image' ref={hiddenFileInput} style={{ display: "none" }} onChange={(e) => handleImageChange(e)} />
                                    <textarea placeholder='Enter about breed in 2 lines' value={text} onChange={(e) => setText(e.target.value)} />
                                </>
                        )
                    }
                    <button onClick={submit}>Submit</button>
                </div>
            </form>
            <ImageSlider animals={animals} />
        </div>
    )
}

export default AddPet
