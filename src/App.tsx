import { Header } from './components/Header'
import { Search } from './components/Search'
import { Task } from './components/Task'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
          <Search/>

          <Task/>

      </div>
    </>
  )
}

export default App
