<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { player } from "../data/player";

  export let answer = "";
  export let clue;
  
  let hasAnswered = false;
  
  function validateAnswer() {
    const playerAnswer = answer.toLowerCase();
    const clueAnswer = (clue.answer as string).toLowerCase();
    const isCorrect = playerAnswer === clueAnswer;
    player.answerClue({ clue, isCorrect });
    
    hasAnswered = true;
  }
</script>

<main class="player-input">
  <input type="text" disabled={hasAnswered} bind:value={answer}>
  
  {#if !hasAnswered}
    <button on:click={validateAnswer}>SUBMIT</button>
  {/if}
</main>