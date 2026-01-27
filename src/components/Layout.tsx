import { Outlet } from 'react-router';
import { ScrollToTop } from './ScrollToTop';
import RouteMeta from './RouteMeta';

export function Layout() {
  return (
    <>
      <RouteMeta />
      <ScrollToTop />
      <Outlet />
    </>
  );
}
