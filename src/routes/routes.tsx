import Root from './root.tsx';
import ErrorPage from '../error-page.tsx';
import {loadCV, loadJob, loadProject, loadProjects} from '../cv.ts';
import JobDetail from './job.tsx';
import Projects from './projects.tsx';
import ProjectDetail from './project.tsx';
import Index from './index.tsx';

export default [
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <Index/>,
                index: true,
                loader: loadCV,
            },
            {
                path: 'jobs/:slug',
                element: <JobDetail/>,
                loader: loadJob,
            },
            {
                path: 'projects',
                element: <Projects/>,
                loader: loadProjects,
            },
            {
                loader: loadProject,
                path: 'projects/:slug',
                element: <ProjectDetail/>,
            },
        ],
    },
]