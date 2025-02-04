import { useContext } from "react"
import { QuizContext } from "../context/QuizProvider"

export default function Home() {
  const quizState = useContext(QuizContext);
  console.log(quizState)

  return (
    <div>Home</div>
  )
}
