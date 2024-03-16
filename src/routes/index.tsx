import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRouting from '../utils/protectedRouting'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { userType } from '../redux/slice/login'
import AdminHome from '../container/admin/home'
import Login from '../container/login'
import UserHome from '../container/user/home'
import Layout from '../layout'
import { pets } from '../constants/data'
import AddPet from '../container/admin/addpet'
import Feedbacks from '../container/admin/feedbacks'
import AdoptPet from '../container/user/petadoption'
import AboutUs from '../container/user/aboutus'
import Contact from '../container/user/contact'
import Record from '../container/user/records'
import PetsListing from '../container/admin/Pets'

const App = () => {
    const user: userType = useSelector<RootState>(state => state.user.loggedInUser) as userType;
    let adminAuth = false;
    let userAuth = false;

    if (user.isAuthenticated) {
        adminAuth = user.isAuthenticated && user.role === 'admin';
        userAuth = user.isAuthenticated && user.role === 'user';
    }

    return (
        <Routes>
            <Route path="/login" index element={<Login />} />

            {/* admin protected route */}

            <Route path="/admin/*" element={<ProtectedRouting isAuthenticated={adminAuth} />}>
                <Route element={<Layout usertype={user?.role} />}>
                    <Route index path='home' element={<AdminHome />}></Route>
                    <Route path="addpet" element={<AddPet />} />
                    <Route path="feedbacks" element={<Feedbacks />} />
                    <Route path='pets' element={<PetsListing />} />
                </Route>
            </Route>

            {/*  user protected route */}

            <Route path="/user/*" element={<ProtectedRouting isAuthenticated={userAuth} />}>
                <Route element={<Layout usertype={user?.role} />}>
                    <Route index path="home" element={<UserHome />} />
                    <Route path="adoptpet" element={<AdoptPet />} />
                    <Route path='aboutus' element={<AboutUs />} />
                    <Route path="records" element={<Record />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Route>

        </Routes>

    )
}

export default App
