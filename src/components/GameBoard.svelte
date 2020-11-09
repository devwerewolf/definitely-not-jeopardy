<script>
  import { onMount } from "svelte";
  import { categories } from "../data/categories";
  import { clues } from "../data/clues";
  import GameBoardCategory from "./GameBoardCategory.svelte";
  import GameBoardClue from "./GameBoardClue.svelte";
  
  function resetBoard() {
    categories.fetch();
  }

  onMount(() => {
    resetBoard();
  });
</script>


<main class="game-board">
  {#await categories.fetch()}
    <p>Fetching categories...</p>
  {:then _}
    {#each $categories as category}
      <div class="category-column">
        <GameBoardCategory {category}/>
      
        {#await clues.fetch(category.id)}
          <p>Fetching clues...</p>
        {:then _}
          {#each $clues[category.id] as clue}
            <GameBoardClue {clue} />
          {/each}
        {/await}
      </div>
    {/each}
  {/await}
</main>


<style lang="scss">
  main {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    
    .category-column {
      display: grid;
      grid-template-rows: 3rem repeat(5, 1fr);
    }
  }
</style>