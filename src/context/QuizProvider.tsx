import { createContext, ReactNode } from "react";

interface QuizContextType {
  name: string;
}

export const QuizContext = createContext<QuizContextType | null>(null);

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const value: QuizContextType = { name: 'Quiz' };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};