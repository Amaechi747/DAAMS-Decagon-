import { BiLaptop} from "react-icons/bi"

type Props = {}

const Greeter = (props: Props) => {
 const hours = new Date().getHours();
 

  return (
    <>
     {
      hours < 12 ? "Good morning " : hours > 11 && hours < 16 ? "Good afternoon " : hours > 15 && hours < 21 ?"Good evening": "Good night"

     } <BiLaptop />
     </>
  )
}

export default Greeter