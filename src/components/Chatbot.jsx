import React from "react";


const Chatbot = () => {
  return (
    <div className="z-50 fixed flex flex-center bg-primary w-[40%] h-[500px] bottom-0 right-2 shadow-2xl rounded-[10%] p-2 md:p-8">
      <div className="mx-auto flex mt-[125%] space-x-2  max-w-3x1">
        <textarea
           type="text"
           placeholder="Type your message..."
           value={""}
           onChange={""}
           className="flex-grow p-2 rounded-lg  mx-auto w-[250px]    h-fit"
     />
          <button onClick={""} className= "bg-black w-13 mt-0.5 h-[60px]  text-white max-w-[80px] shadow-xl uppercase px-4 py-2 rounded-lg hover:bg-slate-950 md:text-2x1 md:max-w-[150px]">
            send
          </button>

       
     

      </div>
    </div>
  );
};

export default Chatbot;
