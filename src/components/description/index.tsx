import React from 'react'
import styles from './index.module.scss';

export type availableOptionsType = {
    [name: string]: {
        image: string,
        about: string
    }
}

export type descriptionType = {
    descriptionData: availableOptionsType
}

const Description = ({ descriptionData }: descriptionType) => {
    return (
        <div className={styles.desc}>
            <h3>Description About Pets:</h3>
            <div className={styles.description}>
                {
                    Object.keys(descriptionData).map(key => <div key={key} className={styles.description_div}>
                        <div>
                            <img src={descriptionData[key].image} alt={key} />
                        </div>
                        <p>{descriptionData[key].about}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Description
