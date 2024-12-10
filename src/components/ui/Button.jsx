import clsx from "clsx"




export default function Button({title, className, onClick}){
  
  return(
    <button className={clsx("flex flex-center px-4 py-2 rounded text-black", className)}>{title}</button>
  )
}