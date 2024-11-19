import { useLocation } from 'react-router-dom';
import { AppSidebar } from './components/sidebar/AppSidebar.tsx';
import { Navbar } from './components/navbar/navbar.tsx';
import { SidebarInset } from './components/ui/sidebar.tsx';
import App from './App.tsx';

export default function MainLayout() {
  const location = useLocation();

  // Define routes where Sidebar and Navbar should not appear
  const excludedRoutes = ['/login'];

  // Check if the current route is in the excludedRoutes array
  const hideSidebarAndNavbar = excludedRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen w-full">
      {!hideSidebarAndNavbar && <AppSidebar />}
      <SidebarInset>
        {!hideSidebarAndNavbar && <Navbar />}
        <main className="flex-1 flex-col">
          <App />
        </main>
      </SidebarInset>
    </div>
  );
}
