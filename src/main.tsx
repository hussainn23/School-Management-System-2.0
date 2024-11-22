import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar.tsx';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout.tsx';
import {ThemeProvider} from "next-themes"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider 
        attribute={'class'}
        defaultTheme='system'
        enableSystem
    >
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <SidebarInset>
            <main className="flex-1 flex-col">
              <MainLayout />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
