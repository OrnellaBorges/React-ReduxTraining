import { createSlice } from "@reduxjs/toolkit";

// ici je stock dans une constante la valeur de mon etat initial
const initialState = [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
];

// ici je crée la tranche = le slice
// un objet avec un nom, l'état initiale et les interations = reducers
// reducer est une grosse fonction qui contient une liste de fonctions
// qui accepte deux entrées state actuel et actions = des fonctions
export const todoSlice = createSlice({
    name: "todo", // nom de ma slice
    initialState, // etat initiale de ma slice
    // reducers va regrouper toutes les interractions liés a todoSlice (toutes les fonctions qu'on utilise)
    reducers: {
        /* ma fonction addTask reçoit en argument 
        state : le state actuel (initialState) est une copy de l'original
        action : est un objet qui permet d'identifier le type de l'action et la valeur via payload
        */
        // Creer une tache
        addTask: (state, action) => {
            //action = {type: "ADD_TASK", payload:"aller faire les course"}

            // ici on construit ine nouvelle tache reprend la creation d'une nouvelle tache => creation d'un objet
            /*  const newTask = {
                id: Date.now(), // on crée un id avec js
                text: action.payload, // contient la valeur de la nouvelle tache
                done: false, // on initialise la tache a false par défaut
            }; */

            // je push dans le tableau initiale ma nouvelle tache
            /*             state.push(newTask); */

            //GPT correction:

            // Ici, nous devons retourner une nouvelle copie du state, pas le modifier directement
            return [
                ...state,
                { id: Date.now(), text: action.payload, done: false },
            ];
        },

        // Changer l'etat d'une tache
        toggleTask: (state, action) => {
            //state = initialState
            //action contient = {type: "TOGGLE_TASK", payload= 20}

            /*CODE V1*/
            // const task = state.find((t) => t.id === action.payload); // trouve la tache dont l'id et est === action.payload = 20
            // task.done = !task.done; // remplace  dans task.done initiale (false) par l'inverse (true)

            /*CODE V2*/
            // Utilise map pour créer une nouvelle copie du state avec la tâche mise à jour
            return state.map((task) =>
                task.id === action.payload
                    ? { ...task, done: !task.done }
                    : task
            );
        },

        // Supprimer la tache
        deleteTask: (state, action) => {
            // state = initialState
            //action contient = {type: "TOGGLE_TASK", payload= 20}
            return (state = state.filter((task) => task.id !== action.payload)); // on filtre dans le state et pour chaque task tu gardes / renvois uniquement que les taches qui sont différente de action.payload = (20)
        },
    },
});

//Reduc Toolkit
// Reunir toute les functions dans une constante qui vont servire a mes action dans le dispatch
export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
