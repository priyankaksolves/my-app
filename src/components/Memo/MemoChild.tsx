import { memo } from "react"

const MemoChild = (props : {p:string}) => {

console.log('Child component rendered!')
  return (
    <div>
        <h1>{props.p}</h1>
    </div>
  )
}

export default memo(MemoChild)
