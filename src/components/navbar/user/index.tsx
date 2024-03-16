import React, { useEffect, useState } from 'react'
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { logoutuser, userType } from '../../../redux/slice/login';
import { toPascalCase } from '../../../utils/text';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../../assets';

const UserNavbar = () => {
    const navigate = useNavigate();
    const userInfo: userType = useSelector<RootState>(state => state.user.loggedInUser) as userType;
    const [page, setPage] = useState('Home');
    const dispatch = useAppDispatch();
    const pageArr = ['Home', 'Adopt Pet', 'Records', 'About Us', 'Contact', "logout"];

    useEffect(() => {
        if (page === 'Home') {
            navigate('/user/home')
        }
        else if (page === 'Adopt Pet') {
            navigate('/user/adoptpet');
        }
        else if (page === 'Records') {
            navigate('/user/records');
        }
        else if (page === 'About Us') {
            navigate('/user/aboutus')
        }
        else if (page === "Contact") {
            navigate('/user/contact')
        }
        else {
            dispatch(logoutuser());
        }
    }, [page])

    return (
        <div className={styles.usernavbar}>
            <div>
                <div><img src={userInfo.profile} alt='U' /></div>
                <p>Hi {toPascalCase(userInfo.name)} !</p>
            </div>
            <div>
                {pageArr.map(pg => <p className={pg === page ? styles.selected : styles.unselected} onClick={() => setPage(pg)}>{pg === 'logout' ? <icons.FaPowerOff fontSize={17} /> : pg}</p>)}
            </div>
        </div>
    )
}

export default UserNavbar
