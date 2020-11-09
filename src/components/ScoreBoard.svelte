<script lang="ts">
  import { player } from "../data/player";
</script>


<main class="score-board">
  <div>
    Score: {$player.score}
  </div>
  
  <div>
    Correct: {$player.answers.correct}
  </div>
  
  <div>
    Incorrect: {$player.answers.incorrect}
  </div>
</main>


<style lang="scss">
  main {
    color: white;
    font-size: 3rem;
  }
</style>