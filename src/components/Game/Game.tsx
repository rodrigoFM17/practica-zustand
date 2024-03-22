import { useQuestionStore } from "../../store/questions";
import QuestionComponent from "../Question/Question";

export default function Game () {

    const questions = useQuestionStore(state => state.questions)
    const currentQuestion = useQuestionStore(state => state.currentQuestion)
    
    const questionInfo = questions[currentQuestion]

    return (<QuestionComponent info={questionInfo}/> )  

}