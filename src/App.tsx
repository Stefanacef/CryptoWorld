import './App.css'
import FeedPage from './pages/FeedPage'
import HomePage from './pages/HomePage'
import Transactions from './pages/Transactions'
import Exchanges from './pages/Exchanges'
import SignUpPage from './pages/SignUpPage'
import { RecoilRoot } from 'recoil'
import TranslationProvider from './i18n/TranslationProvider'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import TopNavigation from './components/navigation/TopNavigation'
import CoinDetails from './pages/CoinDetailsPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TranslationProvider>
          <Router>
            <TopNavigation />
            <Routes>
              <Route path="/" element={<Navigate replace to="/coins" />} />
              <Route path="/coins" element={<HomePage />} />
              <Route path="/coins/:id" element={<CoinDetails />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TranslationProvider>
      </RecoilRoot>
    </div>
  )
}

export default App
