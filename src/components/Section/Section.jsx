import React, { useState } from "react";
import { data2 } from "../../db/data2";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function Section() {
  const [questions, setQuestions] = useState(data2);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-1/2 p-6 bg-white shadow-lg mt-10">
      <h2 className="text-2xl font-extrabold mt-4 mb-6 text-center text-black">
        Questions And Answers
      </h2>

      {questions.map((question) => {
        const isOpen = activeQuestion === question.id;

        return (
          <div key={question.id} className="border-b border-gray-200 pb-4 mb-4">
            <header className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900">
                {question.title}
              </h3>
              <button
                onClick={() => toggleQuestion(question.id)}
                className="text-5xl text-black hover:text-gray-400 transition duration-300"
              >
                {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </button>
            </header>

            {isOpen && (
              <p className="mt-3 text-gray-700 leading-relaxed">
                {question.info}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Section;
