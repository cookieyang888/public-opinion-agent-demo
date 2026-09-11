import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
import '../app/role-panels.css';
import '../app/workflow-updates.css';
import '../app/task-center.css';
import '../app/status-dialogues.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Home/></React.StrictMode>);
