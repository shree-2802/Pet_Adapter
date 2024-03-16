import React from 'react'
import styles from './index.module.scss';

export type feedbacksType = {
    mail: string,
    type: "bad" | "good",
    comment: string
}

export type commentsType = {
    commentArray: feedbacksType[]
}

const Comments = ({ commentArray }: commentsType) => {
    return (
        <div className={styles.comment}>
            <h2>Comment Section</h2>
            <div className={styles.comment_section}>
                {
                    commentArray.map(comment => (
                        <div key={comment.mail}>
                            <h6>{comment.mail}</h6>
                            <p>{comment.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
