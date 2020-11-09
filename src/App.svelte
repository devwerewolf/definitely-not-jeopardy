<script lang="ts">
	import GameBoard from "./components/GameBoard.svelte";
	import ScoreBoard from "./components/ScoreBoard.svelte";
</script>


<main class="app">
	<h1>Welcome to [definitely not] Jeopardy!</h1>
	
	<section class="game">
		<GameBoard/>
		<ScoreBoard/>
	</section>
</main>


<style lang="scss">
	main {
		background-color: #060CE9;
		
		.game {
			height: calc(100% - 3rem);
			display: grid;
			grid-template-columns: 80% 1fr;
		}
	}
	
	
	h1 {
		color: white;
		font-size: 2rem;
		text-align: center;
	}
</style>