import React, { useState } from 'react'
import styles from './index.module.scss';
import { feedbacksData } from '../../../constants/data';
import Comments, { commentsType, feedbacksType } from '../../../components/comments';

const Feedbacks = () => {
    const [filter, setFilter] = useState('Appreciation comments');
    const filterArr = ['Appreciation comments', 'Betterment comments'];
    const goodFeedback: feedbacksType[] = [];
    const badFeedbacks: feedbacksType[] = [];

    feedbacksData.forEach((feedback: feedbacksType) => {
        feedback.type === "good" ? goodFeedback.push(feedback) : badFeedbacks.push(feedback)
    })

    return (
        <div className={styles.feedbacks}>
            <div className={styles.feedbacks_filter}>
                {filterArr.map(item => <div className={filter === item ? styles.selected : styles.unselected} onClick={() => { setFilter(item) }} key={item}>{item}</div>)}
            </div>
            <div>
                {filter === "Appreciation comments" ? <Comments commentArray={goodFeedback} /> : <Comments commentArray={badFeedbacks} />}
            </div>
        </div>
    )
}

export default Feedbacks
