
interface props {
    msg: string;
}

const Child = ({msg}: props) => {
  return (
    <div>
      I'm Child Component- 
      {msg}
    </div>
  )
}

export default Child
