import { writable } from "svelte/store";
import axios from "axios";
import { randomNumber } from "../utils/randomNumber";
import { numberOfCategories } from "../constants/gameBoard";

function init() {
  const { subscribe, set } = writable([]);
  
  return {
    subscribe,
    fetch: async () => {
      const count = numberOfCategories;
      const offset = randomNumber(500, 1000);
      const endpoint = `http://www.jservice.io/api/categories?count=${count}&offset=${offset}`;
      
      const { data: chosenCategories } = await axios.get(endpoint);
      return set(chosenCategories);
    }
  }
}

export const categories = init();