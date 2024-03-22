import { create } from "zustand";
import { questions } from '../../public/questions'
import { persist } from "zustand/middleware";
import conffeti from 'canvas-confetti'

export interface Question {
    id: string,
    question: string,
    code: string,
    answers: string[],
    correctAnswer: number,
    UserAnswer?: number,
    isUserCorrect?: boolean
}

interface State {
    questions: Question[],
    currentQuestion: number,
    fetchQuestions: (limit: number) => void,
    selectAnswer: (questionId: string, answerIndex: number) => void
    goNextQuestion: () => void
    goPreviousQuestion: () => void
}

export const useQuestionStore = create<State>()(persist ((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,

        fetchQuestions: (limit: number) => {
            const json = questions.sort( () => Math.random() - 0.5).slice(0, limit)
            set({questions: json})   
        },

        selectAnswer: (questionId: string, answerIndex: number) => {
            const {questions} = get()

            const newQuestions = structuredClone(questions)
            const questionIndex = newQuestions.findIndex(q => q.id === questionId)
            const questionInfo = newQuestions[questionIndex]

            const isCorrect = questionInfo.correctAnswer === answerIndex
            if(isCorrect) conffeti()

            newQuestions[questionIndex] = {
                ...questionInfo,
                UserAnswer: answerIndex,
                isUserCorrect: isCorrect
            }

            set({questions: newQuestions})
        },

        goNextQuestion() {
            const {currentQuestion, questions} = get()

            const next = currentQuestion + 1

            if(next < questions.length) {
                set({currentQuestion: next})
            }

        },

        goPreviousQuestion() {
            const {currentQuestion} = get()

            const prev = currentQuestion - 1

            if(prev >= 0) {
                set({currentQuestion: prev})
            }

        },
    }
}, {
    name: 'questions',
}))

