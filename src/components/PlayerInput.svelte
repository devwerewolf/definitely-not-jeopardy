<script lang="ts">
  import { player } from "../data/player";

  export let answer = "";
  export let clue;
  
  let hasAnswered = false;
  let isCorrect = null;
  
  function validateAnswer() {
    const playerAnswer = answer.toLowerCase();
    const clueAnswer = (clue.answer as string).toLowerCase();
    isCorrect = playerAnswer === clueAnswer;
    player.answerClue({ clue, isCorrect });
    
    hasAnswered = true;
  }
</script>

<main class="player-input">
  {#if !hasAnswered}
    <input type="text" disabled={hasAnswered} bind:value={answer}>
    <button on:click={validateAnswer}>SUBMIT</button>
  {:else}
    <div class="player-answer" class:incorrect={!isCorrect}>
      {answer}
    </div>
    
    {#if !isCorrect}
      <div class="clue-answer">
        {clue.answer}
      </div>
    {/if}
  {/if}
  
</main>


<style lang="scss">
  .player-answer {
    font-style: italic;
    
    &.incorrect {
      text-decoration: line-through;
    }
  }
  
  .clue-answer {
    color: darkred;
    font-weight: bold;
  }
</style>