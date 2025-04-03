import './App.css'
import Layout from './components/layout/Layout'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import VocabLayout from './pages/vocab/VocabLayout'
import VocabPage from './pages/vocab/VocabPage'
import ExamLayout from './pages/exam/ExamLayout'
import ExamPage from './pages/exam/ExamPage'
import AdminLayout from './pages/admin/AdminLayout'
import AdminPage from './pages/admin/AdminPage'
import AdminTypePage from './pages/admin/AdminTypePage'
import AdminSubTypePage from './pages/admin/AdminSubTypePage'
import AdminDetailSubTypePage from './pages/admin/AdminDetailSubTypePage'
import AdminTopicPage from './pages/admin/AdminTopicPage'
import AdminSubTopicPage from './pages/admin/AdminSubTopicPage'
import TopicPage from './pages/vocab/topic/TopicPage'
import SubTopicPage from './pages/vocab/topic/SubTopicPage'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path="vocab" element={<VocabLayout />}>
          <Route index element={<VocabPage />} />
          <Route path='topic' element={<TopicPage />} />
          <Route path="topic/:id" element={<SubTopicPage />} />
        </Route>
        <Route path="exam" element={<ExamLayout />}>
          <Route index element={<ExamPage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="type" element={<AdminTypePage />} />
          <Route path="sub-type" element={<AdminSubTypePage />} />
          <Route path="detail-sub-type" element={<AdminDetailSubTypePage />} />
          <Route path="topic" element={<AdminTopicPage />} />
          <Route path="sub-topic" element={<AdminSubTopicPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
  )
}

export default App
