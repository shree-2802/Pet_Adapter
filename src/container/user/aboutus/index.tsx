import React from 'react'
import styles from './index.module.scss';

const AboutUs = () => {
    const customerImage = [
        {
            name: "Parvathi",
            image: "https://media.istockphoto.com/id/1569063568/photo/woman-and-her-dog-resting-on-the-grass-in-the-park-hugging-vertical-image.webp?b=1&s=170667a&w=0&k=20&c=Y09b-MgsrLcmj0hpNQuQCiBv3VyB8WDoF7WFYD3I3eE="
        },
        {
            name: "Shree",
            image: "https://media.istockphoto.com/id/1422291812/photo/the-cute-woman-love-her-dog.webp?b=1&s=170667a&w=0&k=20&c=4wdw3sDw-QU_go6nfzeaO8KQUo70ftL42oqXk264Ma8="
        },
        {
            name: "Raji",
            image: "https://media.istockphoto.com/id/1344021882/photo/portrait-of-happy-multiracial-couple-scratching-their-pet-dog-sitting-on-floor-at-home.webp?b=1&s=170667a&w=0&k=20&c=muuWZTKMKG05cP9D7c5C5Qwxe8087erEJMtbjMe2Utc="
        }
    ]
    return (
        <div className={styles.aboutus}>
            <div className={styles.aboutus_story}>
                <h1>Our Story</h1>
                <p>
                    Welcome to <span style={{color:"green",fontWeight:'bold'}}>Pawstore</span>, where our passion for pets drives everything we do. Established with a deep commitment to providing
                    the best for our furry, feathery, and scaly friends, we strive to create a haven for pet lovers and their beloved companions.
                    With a wide array of premium products, from nutritious foods to cozy beds and stimulating toys, we cater to the diverse needs
                    of pets and their devoted owners. Our team of dedicated professionals shares a love for animals and is here to offer expert guidance
                    and personalized recommendations, ensuring that every pet receives the care and attention they deserve. Whether you're a seasoned
                    pet parent or embarking on the journey of pet ownership for the first time, we're here to support you every step of the way. 
                    At <span style={{color:'green',fontWeight:"bold"}}>Pawstore</span>, we believe that every wag of the tail, purr, and chirp enriches our lives, and we're honored to be a
                    part of your pet's story. Come visit us today and experience the difference of a pet store that truly cares.
                </p>
            </div>
            <div className={styles.aboutus_customer}>
                <h3>Our Happy Customers</h3>
                <div className={styles.aboutus_customer_description}>
                    {
                        customerImage.map(customer => <div>
                            <img src={customer.image} alt='jhs' />
                            <p>{customer.name}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs
