import LoginView from './views/LoginView.js';
import RegisterView from './views/RigisterView.js';
import MemberListView from './views/admin/MemberListView.js';
import AdminListView from './views/admin/AdminListView.js';
import RepairReceptionView from './views/admin/RepairReceptionView.js';
import FAQMagementView from './views/admin/FAQMagementView.js';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/admin/members" element={<MemberListView />} />
        <Route path="/admin/admins" element={<AdminListView />} />
        <Route path="/admin/repaireprocess" element={<RepairReceptionView />} />
        <Route path="/admin/asklist" element={<FAQMagementView />} />

      </Routes>
    </Router>
  );
}

export default App;
