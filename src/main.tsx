import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home.tsx";
import ErrorPage from './routes/ErrorPage.tsx';
import Question from './routes/Question.tsx';
import Result from './routes/Result.tsx';
import { QuizProvider } from './context/QuizProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/question/:id",
        element: <Question />
      },
      {
        path: "/result",
        element: <Result />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  </StrictMode>,
)
