import './App.css'
import Header from './comp/Header/Header'
import TaskList from './comp/TaskList/TaskList'

function App() {

  return (
    <>
      <div className='app-container'>
        <Header />
        <TaskList />
      </div>
    </>
  )
}

export default App
