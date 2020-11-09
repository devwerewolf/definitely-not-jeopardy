<script lang="ts">
  import { player } from "../data/player";
</script>


<main>
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