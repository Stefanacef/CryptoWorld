import './App.css'
import FeedPage from './pages/FeedPage'
import HomePage from './pages/HomePage'
import { RecoilRoot } from 'recoil'
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <HomePage />
        <FeedPage />
      </RecoilRoot>
    </div>
  )
}

export default App
