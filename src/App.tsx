import { useState } from "react";

function App() {
  const [modalThanks, setModalThanks] = useState(false);
  const [note, setNote] = useState<number | null>(null);
  const [modalErro, setModalErro] = useState(false)

  function openThanks() {
    if(note === null){
      setModalErro(true)
    }else {
      setModalThanks(true);
    }
  }

  function setNotes(value: number) {
    setNote(value);
  }

  return (
    <div className="bg-very-dark-blue flex justify-center items-center min-h-screen">
      {modalThanks ? (
        <div className="bg-dark-blue mx-5 p-5 md:p-10 flex flex-col items-center text-center rounded-3xl gap-5 w-full md:w-6/12 lg:w-6/12 2xl:w-3/12">
          <img src="/illustration-thank-you.svg" className="w-44" />
          <p className="bg-gray-700 text-orange py-2 px-5 rounded-full">
            You selected {note} out of 5
          </p>
          <h1 className="text-4xl text-white font-bold">Thank You!</h1>
          <p className="text-light-grey font-normal text-lg">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className="bg-dark-blue mx-5 p-5 md:p-10 flex flex-col rounded-3xl gap-5 w-full md:w-6/12 lg:w-6/12 2xl:w-3/12">
          <div className="bg-gray-700 h-10 w-10 rounded-full flex flex-col items-center justify-center">
            <img src="/icon-star.svg" className="h-5 w-5" />
          </div>
          <h1 className="text-4xl text-white font-bold">How did we do?</h1>
          <p className="text-light-grey font-normal text-lg">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex flex-row gap-5">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setNotes(value)}
                className={`bg-gray-700 hover:bg-orange md:text-xl rounded-full h-12 w-12 md:h-16 md:w-16 text-white ${note === value ? "bg-orange" : ""}`}
              >
                {value}
              </button>
            ))}
          </div>
          <button
            onClick={openThanks}
            className="bg-orange hover:bg-white text-dark-blue font-bold rounded-full py-4 text-xl"
          >
            SUBMIT
          </button>
          {modalErro && (
            <p className="bg-red-700 text-center text-white rounded-full py-2">Complete the survey before proceeding</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
