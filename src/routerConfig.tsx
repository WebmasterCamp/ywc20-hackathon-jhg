import {createBrowserRouter, Outlet} from 'react-router';
import {LoginPage, JobRegisterPage, AdminApprovePage} from './pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/job-register',
        element: <JobRegisterPage />,
    },
    {
        path: '/admin/approve',
        element: <AdminApprovePage />,
    },
    {
        path: '/home',
        element: (
            <div>
                <div>layout if needed</div>
                <Outlet />
            </div>
        ),
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
