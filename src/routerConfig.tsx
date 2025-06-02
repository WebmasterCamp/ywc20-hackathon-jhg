<<<<<<< HEAD
=======

>>>>>>> main
import {createBrowserRouter} from 'react-router';
import {LoginPage, JobRegisterPage, Landingpage, FineJob, WorkersPage, Payment, Deposit ,Landing, AdminApprovePage, Receipt } from './pages';
import Adminconfirm from './pages/adminconfirm';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Landing />
        ,
    },
    {
        path: '/company-login',
        element: <LoginPage />,
    },
    {
        path: '/company-register',
        element: <JobRegisterPage />,
    },
    {
        path: '/findjob',
        element: <FineJob />,
    },
    {
        path: '/adminconfirm',
        element: <Adminconfirm />,
    },
    {
        path: '/deposit',
        element: <Deposit />,
    },
    {
        path: '/workers',
        element: <WorkersPage />,
    },
    {
        path: '/payment',
        element: <Payment />,
    },
    {
        path: '/Landingpage',
        element: <Landingpage />,

    },
    {
        path: '/receipt',
        element: <Receipt />,

    },
    {
        path: '/admin/approve',
        element: <AdminApprovePage />,
    },
]);

export default router;
