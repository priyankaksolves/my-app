import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookList from './components/BookList.tsx'
import ThemeToggler from './components/Context/BookStore/ThemeToggler.tsx'
import { ThemeProvider } from './components/Context/BookStore/ThemeContext.tsx'
import App from './App.tsx'

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
    <App />
    <ThemeToggler />
    <BookList />
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
