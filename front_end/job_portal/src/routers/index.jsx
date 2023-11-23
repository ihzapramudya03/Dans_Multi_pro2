import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage.jsx'
import DetailPage from '../pages/DetailPage.jsx'
import JobPage from '../pages/JobPage.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'



const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navbar/>
                <HomePage />
                <Footer/>
            </>
        ),
    },
    {
        path: "jobs",
        element: (
            <>
                <Navbar/>
                <JobPage />
                <Footer/>
            </>
        ),
    },
    {
        path: "detail/:id",
        element: (
            <>
                <Navbar/>
                <DetailPage />
                <Footer/>
            </>
        ),
    },
]);

export default router