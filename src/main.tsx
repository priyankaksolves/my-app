import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeToggler from './components/Context/BookStore/ThemeToggler.tsx'
import { ThemeProvider } from './components/Context/BookStore/ThemeContext.tsx'
import BookStore from './components/Context/BookStore/Bookstore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <Parent/>
    <ListComponent/>
    <UseMemo/>
    <MemoParent/>
    <Counter/> */}


    {/* <Banglore/> */}
    <ThemeProvider>
      <div className="app">
        <h1>Welcome to the Bookstore</h1>
        <ThemeToggler />
        <BookStore />
      </div>
    </ThemeProvider>



        {/* <Profiler id= 'Profiler' onRender={callBack}>
      <ProfilerComponnet></ProfilerComponnet>
    </Profiler> */}

  </StrictMode>
)

// function callBack(
//   id,
//   phase,
//   actualDuration,
//   baseDuration,StartTime,
//   commitTime,
//   interactions
// ){
//   console.log({
//     id,
//     phase,
//     actualDuration,
//     baseDuration,StartTime,
//     commitTime,
//     interactions
//   }

//   )
// }
