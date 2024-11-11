import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider, SidebarInset } from './components/ui/sidebar.tsx'
import { AppSidebar } from './components/sidebar/AppSidebar.tsx'
import { Navbar } from './components/navbar/navbar.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <SidebarInset>
                    <Navbar />
                    <main className="flex-1 flex-col">
                        <App />
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
        </BrowserRouter>
    </StrictMode>
);
