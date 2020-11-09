import { writable } from "svelte/store";

function init() {
  const { subscribe, update } = writable({
    score: 0,
    answers: {
      correct: 0,
      incorrect: 0
    }
  });
  
  return {
    subscribe,
    answerClue: ({clue, isCorrect}) => update((playerValue) => {
      let scoreOffset = clue.value;
      let { score } = playerValue;
      let { correct, incorrect } = playerValue.answers;
      
      if (isCorrect) {
        score += scoreOffset;
        correct += 1;
      }
      else {
        score -= scoreOffset;
        incorrect += 1;
      }
      
      return {
        score,
        answers: {
          correct,
          incorrect
        }
      }
    })
  }
}

export const player = init();