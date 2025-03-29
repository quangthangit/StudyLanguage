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
          </Route>
          <Route path="exam" element={<ExamLayout />}>
            <Route index element={<ExamPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
