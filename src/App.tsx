import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppNavbar } from './components/AppNavbar'
import { FeedPage } from './pages/FeedPage'
import { TilesPage } from './pages/TilesPage'

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="catalog-header">
          <span className="home-link">AM Forecast</span>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/feed/:id" element={<FeedPage />} />
            <Route path="/tiles" element={<TilesPage />} />
          </Routes>
        </main>
        <AppNavbar />
      </div>
    </HashRouter>
  )
}
