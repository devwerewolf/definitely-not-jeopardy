import { writable } from "svelte/store";
import { cluesPerCategory } from "../constants/gameBoard";
import axios from "axios";


function init() {
  const { subscribe, update } = writable({});
  
  return {
    subscribe,
    fetch: async (categoryID: number) => {
      let chosenClues = [];
      
      for (let i = 1; i <= cluesPerCategory; i++) {
        const value = 200 * i;
        const endpoint = `http://www.jservice.io/api/clues?value=${value}&category=${categoryID}`;
        
        let { data: clueList } = await axios.get(endpoint);
        
        if (!clueList.length) {
          clueList = [{ question: "[[Nope]]" }];
        }
        
        chosenClues = [...chosenClues, ...clueList];
      }
      
      return update((cluesValue) => {
        return {
          ...cluesValue,
          [categoryID]: chosenClues.slice(0, 5)
        }
      });
    }
  }
}

export const clues = init();