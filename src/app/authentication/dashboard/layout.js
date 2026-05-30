// src/app/authentication/layout.js বা dashboard/layout.js

import AdminCheck from '@/app/Auth/Admin/AdminCheck';

export default function DashboardLayout({ children }) {
  return (
    <AdminCheck>
      <section className=''>{children}</section>
    </AdminCheck>
  );
}
