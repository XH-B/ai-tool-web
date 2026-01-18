// 必须使用 HashRouter 路由，不能使用别的 Router
import { Routes, Route, HashRouter as Router } from 'react-router'
import Home from './pages/Home/index'

function App() {
  return (
      <div className="min-h-screen">
          <Router>
              <Routes>
                    <Route path="/" element={<Home />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
