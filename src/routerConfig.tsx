import {createBrowserRouter, Outlet} from 'react-router';
import {LoginPage, JobRegisterPage, Homepage} from './pages';

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
        path: '/',
        element: <Homepage />,
        children: [
            {
                path: '',
                element: <div>Settings</div>,
            },
            {
                path: '/home/dashboard',
                element: <div>Dashboard</div>,
            },
        ],
    },
]);

export default router;
