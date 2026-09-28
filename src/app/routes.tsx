import { useEffect } from 'react';
import { createBrowserRouter, Outlet, useLocation } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ClientTestimonialsPage } from './pages/ClientTestimonialsPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { BuildingServicesPage } from './pages/BuildingServicesPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPolicy';

function ScrollToTopLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    element: <ScrollToTopLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/projects/:slug',
        element: <ProjectDetailPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/building-services',
        element: <BuildingServicesPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/client-testimonials',
        element: <ClientTestimonialsPage />,
      },
      {
        path: '/the-process',
        element: <ProcessPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/terms',
        element: <TermsPage />,
      },
      {
        path: '/privacy',
        element: <PrivacyPage />,
      },
    ],
  }
]);
