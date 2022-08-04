import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Duplicate from './Components/others/duplicate'
import Tenth from './Components/twelve-tasks/10_task'
import Eleventh from './Components/twelve-tasks/11_task'
import Twelve from './Components/twelve-tasks/12_task'
import First1 from './Components/twelve-tasks/1_task'
import Second from './Components/twelve-tasks/2_task'
import Third from './Components/twelve-tasks/3_task'
import Four from './Components/twelve-tasks/4_task'
import Fifth from './Components/twelve-tasks/5_task'
import Sixth from './Components/twelve-tasks/6_task'
import Seventh from './Components/twelve-tasks/7_task'
import Eighth from './Components/twelve-tasks/8_task'
import Ninth from './Components/twelve-tasks/9_task'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='first' element={< First1 />} />
        <Route path='second' element={< Second />} />
        <Route path='third' element={< Third />} />
        <Route path='four' element={< Four />} />
        <Route path='five' element={< Fifth />} />
        <Route path='six' element={<Sixth />} />
        <Route path='seven' element={< Seventh />} />
        <Route path='eight' element={< Eighth />} />
        <Route path='nine' element={< Ninth />} />
        <Route path='ten' element={< Tenth />} />
        <Route path='eleven' element={<Eleventh />} />
        <Route path='twelve' element={< Twelve />} />
        <Route path='duplicate' element={< Duplicate />} />

      </Routes>
    </Router>
  )
}

export default AppRoutes