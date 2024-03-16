import { useEffect, useState } from 'react';
import ImageSlider, { animalsPropsType } from '../../../components/ImageSlider';
import { availableOptionsType } from '../../../components/description';
import Select from '../../../components/select';
import { availableOptions, breeds, pets } from '../../../constants/data';
import styles from './index.module.scss';
import { emailInvalid, inputErr, submitionSuccess } from '../../../utils/sweetalert';

const AdoptPet = () => {
    let animals: animalsPropsType = {} as animalsPropsType;
    let opt: availableOptionsType = availableOptions;
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const [yearExperience, setYearExperience] = useState(10);
    const [pet, setPet] = useState('');
    const [breed, setBreed] = useState('Breed');
    const [age, setAge] = useState<number>();
    Object.keys(opt).forEach((item: string) => {
        animals = {
            ...animals,
            [item]: opt[item].image
        }
    })
    const petSet = {
        pet, setPet
    }
    const breedSet = {
        pet: breed, setPet: setBreed
    }
    // dogs
    // cats
    // rabbits
    // birds
    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        if (email === '' || name === '' || yearExperience === null || pet === '' || breed === null || age === null) {
            inputErr()
        }
        if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            submitionSuccess()
            setEmail(""); setName(""); setPet(""); setBreed(""); setYearExperience(0); setAge(0)
        }
        else {
            emailInvalid()
        }
    }
    const dataSetProvider = () => {
        if (pet === "dogs")
            return Object.keys(breeds.dogs)
        else if (pet === "cats")
            return Object.keys(breeds.cats);
        else if (pet === "rabbits")
            return Object.keys(breeds.rabbits);
        else if (pet === "birds")
            return Object.keys(breeds.birds)
        else
            return ['breed']
    }
    useEffect(() => {
        dataSetProvider()
    }, [pet, breed])
    return (
        <div className={styles.addpet}>
            <form>
                <div>
                    <h3>Pet Adoption Form</h3>
                    <input placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='number' placeholder="Age" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                    <div className={styles.addpet_range}>
                        <label>Pet care experience:</label>
                        <input type='range' min={0} max={100} value={yearExperience} maxLength={99} onChange={(e) => setYearExperience(parseInt(e.target.value))} />
                    </div>
                    <Select dataSet={Object.keys(pets)} petSet={petSet} />
                    <Select dataSet={dataSetProvider()} state={pet !== '' ? "active" : "inactive"} petSet={breedSet} />
                    <button onClick={submit}>Submit</button>
                </div>
            </form>
            <ImageSlider animals={animals} />
        </div>
    )
}

export default AdoptPet
