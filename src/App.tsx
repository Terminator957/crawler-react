/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-24 16:30:41
 * @LastEditTime: 2023-08-25 16:21:27
 * @LastEditors: Do not edit
 */
import { BrowserRouter as Router } from 'react-router-dom'
import WrappedRoutes from '@/router'
function App() {
  return (
    <div className="App">
      <Router>
        <WrappedRoutes />
      </Router>
    </div>
  );
}

export default App;