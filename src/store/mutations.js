// state -> mutations -> actions 

export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setSearchByLetter(state, meals) {
    state.searchByLetter = meals || []
}

export function setSearchByIngredient(state, meals) {
    state.searchByIngredient = meals || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
}