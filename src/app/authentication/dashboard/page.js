import AdminCheck from '@/app/Auth/Admin/AdminCheck';

const Dashboard = () => {
  return (
    <AdminCheck>
      <div>
        {/* এইখানের সব কিছু children হিসেবে AdminCheck এ যাবে */}
        <h1>Welcome Admin!</h1>
        <p>This is your secret dashboard.</p>
      </div>
    </AdminCheck>
  );
};

export default Dashboard;
