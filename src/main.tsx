import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Parent from './components/parent-child-basic/Parent.tsx'
import ListComponent from './components/key-prop-in-lists/ListComponent.tsx'
import UseMemo from './components/UseMemo/UseMemo.tsx'
import MemoParent from './components/Memo/MemoParent.tsx'
import Counter from './components/UseCallBack/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Parent/>
    <ListComponent/>
    <UseMemo/>
    <MemoParent/>
    {/* <Profiler id= 'Profiler' onRender={callBack}>
      <ProfilerComponnet></ProfilerComponnet>
    </Profiler> */}
    <Counter/>
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
