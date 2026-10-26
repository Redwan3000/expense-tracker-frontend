
import {SlideShow} from "@/components/SlideShow";
import RegistraitonForm from "./components/RegistraitonForm";


export default function Register() {

    

    return (
        <div
            className={"h-full w-full bg-[#DBD9BC]  rounded-sm shadow-sm backdrop-blur-md border-2 border-white/70 flex overflow-hidden"}>


            <div className={"h-full w-1/2 flex justify-center items-center flex-col"}>
                <SlideShow/>
                <h1 className={"text-[#33450E] font-extrabold font-serif text-[40px]"}>Haltrack</h1>
                <h1 className={"text-[#BB9668] font-extrabold font-serif "}>Your Money Our Responsibility</h1>
            </div>

            <div className={"h-full w-1/2 justify-center items-center bg-[#F2f2f2] rounded-sm rounded-l-xl flex "}>

                <RegistraitonForm />

            </div>

        </div>
    );
}
