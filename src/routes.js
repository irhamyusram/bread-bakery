import React from 'react';

 const Supervisor = React.lazy(() => import('./views/dashboard/Supervisor'));
 const Operator = React.lazy(() => import('./views/dashboard/Operator'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Supervisor', component: Supervisor},
  { path: '/dashoperator', name: 'Operator', component: Operator}

];

export default routes;
