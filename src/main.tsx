import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from './MainLayout';
import { SidebarProvider } from './components/ui/sidebar.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <MainLayout />
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
