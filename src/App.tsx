import './App.css'
import FeedPage from './pages/FeedPage'
import HomePage from './pages/HomePage'
import { RecoilRoot } from 'recoil'
import TranslationProvider from './i18n/TranslationProvider'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TranslationProvider>
          <HomePage />
          <FeedPage />
        </TranslationProvider>
      </RecoilRoot>
    </div>
  )
}

export default App
