<script context="module">
  // import sanitizeHtml from 'sanitize-html';
  
  // function sanitize(dirtyText) {
  //   return sanitizeHtml(dirtyText, {
  //     allowedTags: [],
  //     allowedAttributes: [],
  //   });
  // }
</script>

<script>
  import PlayerInput from "./PlayerInput.svelte";

  export let clue;
  
  let hidden = true;
  
  function showClue() {
    hidden = false;
    
    // DEBUG
    console.log(clue.answer);
  }
</script>


<main class="game-board-clue" on:click={showClue}>
  {#if hidden}
    {clue.value}
  {:else}
    {@html clue.question}
    
    <PlayerInput {clue} />
  {/if}
</main>


<style>
  main {
    background-color: skyblue;
    border-radius: 2px;
    box-shadow: 5px 10px 8px;
    cursor: pointer;
  }
</style>