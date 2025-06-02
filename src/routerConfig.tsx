import { createBrowserRouter } from 'react-router';
import { LoginPage, JobRegisterPage, Landingpage, FindJob, Landing, AdminApprovePage } from './pages';
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
        element: <FindJob />,
    },
    {
        path: '/adminconfirm',
        element: <Adminconfirm />,
    },
    {
        path: '/Landingpage',
        element: <Landingpage />,
    },
    {
        path: '/admin/approve',
        element: <AdminApprovePage />,
    },
]);

export default router;
