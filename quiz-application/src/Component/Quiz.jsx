import React ,{ useState }  from 'react'
import Ques from './Ques'
import QuizJson from './QuizJson'
import { ansKey } from './QuizJson'

const Quiz = () => {
    const [userAns,setUserAns] = useState({})

    const optionClick =(e)=>{
        setUserAns({...userAns,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e) =>{
       e.preventDefault()
       let score = 0
       for(let i=1;i<=QuizJson.length;i++)
       {
        if(ansKey[i]===userAns[i])
        {
            score++
        }
        
       }
       alert(`Your Score is ${score} Out of ${QuizJson.length}`)
    }
    return (
        <>
            <div className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Quiz
                    </h2>
                </div>

                <div className="mt-10 ">
                    <form action="#" method="POST" onSubmit={handleSubmit} >
                        <div>
                            <Ques QuizJson ={QuizJson} Question = "question" optionClick = {optionClick} Choices="choices"/>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Quiz