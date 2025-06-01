import {createBrowserRouter} from 'react-router';
import {LoginPage, JobRegisterPage, Landingpage, FineJob} from './pages';
import Adminconfirm from './pages/adminconfirm';

export const router = createBrowserRouter([
    {
        path: '/company-login',
        element: <LoginPage />,
    },
    {
        path: '/company-register',
        element: <JobRegisterPage />,
    },
    {
        path: '/finejob',
        element: <FineJob />,
    },
     {
        path: '/adminconfirm',
        element: <Adminconfirm />,
    },
    {
        path: '/Landingpage',
        element: <Landingpage />,
        // children: [
        //     {
        //         path: '',
        //         element: <div>Settings</div>,
        //     },
        //     {
        //         path: '/home/dashboard',
        //         element: <div>Dashboard</div>,
        //     },
        // ],
    },
]);

export default router;
