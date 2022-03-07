import './App.css'
import FeedPage from './pages/FeedPage'
import HomePage from './pages/HomePage'
import ExplorationPage from './pages/ExplorationPage'
import Exchanges from './pages/Exchanges'
import SignUpPage from './pages/SignUpPage'
import { RecoilRoot } from 'recoil'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MainStatsBar from './components/navigation/MainStatsBar'
import TopNavigation from './components/navigation/TopNavigation'
import CoinDetails from './pages/CoinDetailsPage'

function App() {
  return (
    <div className="App">
      <Router>
        <RecoilRoot>
          <MainStatsBar />
          <TopNavigation />
          <Routes>
            <Route path="/" element={<Navigate replace to="/coins" />} />
            <Route path="/coins" element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinDetails />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/research" element={<ExplorationPage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </div>
  )
}

export default App
