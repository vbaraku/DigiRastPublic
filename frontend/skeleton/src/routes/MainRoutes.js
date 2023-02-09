import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
import AssessSection from 'views/self-assess/AssessSection';
// sample page routing
// const Leadership = Loadable(lazy(() => import('views/self-assess/leadership')));
// const Teaching = Loadable(lazy(() => import('views/self-assess/teaching')));
// const Professional = Loadable(lazy(() => import('views/self-assess/professional')));
// const Assessment = Loadable(lazy(() => import('views/self-assess/assessment')));
// const Content = Loadable(lazy(() => import('views/self-assess/content')));
// const Collaboration = Loadable(lazy(() => import('views/self-assess/collaboration')));
// const Infrastructure = Loadable(lazy(() => import('views/self-assess/infrastructure')));

const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Graphs = Loadable(lazy(() => import('views/graphs')));
const Home = Loadable(lazy(() => import('views/home/home')));
const SelfAssess = Loadable(lazy(() => import('views/self-assess')));


const Leadership = <AssessSection thematicElement="Leadership & Governance Practices" nextPage="teachingandlearningpractices" />;
const Teaching = <AssessSection thematicElement="Teaching and Learning Practices" nextPage="professionaldevelopment" />;
const Professional = <AssessSection thematicElement="Professional Development" nextPage="assessmentpractices" />;
const Assessment = <AssessSection thematicElement="Assessment practices" nextPage="contentandcurricula"/>;
const Content = <AssessSection thematicElement="Content and Curricula" nextPage="collaborationandnetworking" />;
const Collaboration = <AssessSection thematicElement="Collaboration and Networking" nextPage="infrastructure" />;
const Infrastructure = <AssessSection thematicElement="Infrastructure" nextPage="graphs"/>;

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/registration',
            element: <SamplePage />
        },
        {
            path: '/selfassess/leadershipandgovernancepractices',
            element: Leadership
        },
        {
            path: '/selfassess/teachingandlearningpractices',
            element: Teaching
        },
        {
            path: '/selfassess/professionaldevelopment',
            element: Professional
        },
        {
            path: '/selfassess/assessmentpractices',
            element: Assessment
        },
        {
            path: '/selfassess/contentandcurricula',
            element: Content
        },
        {
            path: '/selfassess/collaborationandnetworking',
            element: Collaboration
        },
        {
            path: '/selfassess/infrastructure',
            element: Infrastructure
        },
        {
            path: '/selfassess',
            element: <SelfAssess />
        },
        {
            path: '/graphs',
            element: <Graphs />
        },
        {
            path: '/',
            element: <Home />
        }
    ]
};

export default MainRoutes;
