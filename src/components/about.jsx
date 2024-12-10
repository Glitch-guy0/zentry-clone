import AnimatedText from "./ui/AnimatedText"




export default function About(){
  return(
    <div className="min-h-svh min-w-svw bg-blue-75 flex flex-col items-center gap-5">
      <h1 className="uppercase font-general text-sm md:text-[10px] font-bold mt-10">welcome to Zentry</h1>
      <AnimatedText text="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure" className="mt-10" />
    </div>
  )
}