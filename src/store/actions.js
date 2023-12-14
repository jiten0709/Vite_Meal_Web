// state -> mutations -> actions 

import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    })
}

export function searchByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
        commit('setSearchByLetter', data.meals)
    })
}

export function searchByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
        commit('setSearchByIngredient', data.meals)
    })
}

