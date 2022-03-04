import './App.css'
import FeedPage from './pages/FeedPage'
import HomePage from './pages/HomePage'
import ExplorationPage from './pages/ExplorationPage'
import Exchanges from './pages/Exchanges'
import SignUpPage from './pages/SignUpPage'
import { RecoilRoot } from 'recoil'
import TranslationProvider from './i18n/TranslationProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainStatsBar from './components/navigation/MainStatsBar'
import TopNavigation from './components/navigation/TopNavigation'

function App() {
  return (
    <div className="App">
      <Router>
        <RecoilRoot>
          <TranslationProvider>
            <MainStatsBar />
            <TopNavigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/research" element={<ExplorationPage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </TranslationProvider>
        </RecoilRoot>
      </Router>
    </div>
  )
}

export default App
