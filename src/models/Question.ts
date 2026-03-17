export class Question {
  question: string;
  answers: string[];
  correctAnswerIndex: number;

  constructor(question: string, answers: string[], correctAnswerIndex: number) {
    this.question = question;
    this.answers = answers;
    this.correctAnswerIndex = correctAnswerIndex;
  }
}
