import { questions } from "../../../public/questions";
import { Question, useQuestionStore } from "../../store/questions";
import './Question.css'

export default function QuestionComponent ({info}: {info: Question}) {

    const selectAnswer = useQuestionStore(state => state.selectAnswer)
    const currentQuestion = useQuestionStore(state => state.currentQuestion)
    const goNext = useQuestionStore(state => state.goNextQuestion)
    const goPrev = useQuestionStore(state => state.goPreviousQuestion)

    const getBackgroundColor = (index: number) => {
        const {correctAnswer, UserAnswer} = info

        if(UserAnswer == null) return 'default'
        if(UserAnswer !== null && index === correctAnswer) return 'correct'
        if(index == UserAnswer) return 'incorrect'
        
    }

    

    const handleClick = (answerIndex: number) => {
        return () => selectAnswer(info.id, answerIndex)
    }

    return (
        <article className="question">
            <div>
                <button onClick={goPrev}>
                    {'<='}
                </button>
                <h3>{currentQuestion + 1} / 5</h3>
                <button onClick={goNext}>
                    {'=>'}
                </button>
            </div>
            <h5>
                {info.question}
            </h5>
            <code>
                {info.code}
            </code>

            <ul>
                {
                    info.answers.map((answer, index) => {
                    console.log(getBackgroundColor(index))
                    return <li key={index - 1} onClick={handleClick(index)} className={getBackgroundColor(index)}>
                        {answer}
                    </li>

                    })
                }
            </ul>

        </article>
    )
}