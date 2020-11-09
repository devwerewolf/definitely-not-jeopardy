<script lang="ts">
	import GameBoard from "./components/GameBoard.svelte";
	import ScoreBoard from "./components/ScoreBoard.svelte";
</script>


<main class="app">
	<GameBoard/>
	<ScoreBoard/>
</main>


<style>
	main {
		display: grid;
		grid-template-columns: 1fr 5rem;
	}
</style>