import React from 'react'

const Ques = (props) => {

    
    return (
        <>
            {props.QuizJson.map((Question) => <div className='w-full border-2 border-black rounded-lg p-3 mt-3'>
                <label htmlFor="email" className=" block text-sm font-medium leading-6 text-gray-700">
                   {Question.id}.  {Question.question}
                </label>
                {Question.choices.map((option) =>
                   
                    <div class="flex items-center mt-3">
                        <input  id="default-radio-2" type="radio" value={option} name={Question.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={props.optionClick}/>
                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-bold ">{option}</label>
                    </div>
                )}
            </div>)}

        </>
    )
}

export default Ques