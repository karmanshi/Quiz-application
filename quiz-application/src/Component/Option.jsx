import React from 'react'

const Option = (props) => {
    return (
        <>
            <div>
               {props.QuizJson.map((options) => <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input
                                id="list-radio-license"
                                type="radio"
                                defaultValue=""
                                name="list-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                htmlFor="list-radio-license"
                                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                {options.Choices}
                            </label>
                        </div>
                    </li>
                    
                </ul>) }


            </div>


        </>
    )
}

export default Option