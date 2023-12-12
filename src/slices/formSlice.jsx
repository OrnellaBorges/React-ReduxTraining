import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ firstName: "Ornella", lastName: "Borges", age: 32 }];

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        //Cette méthode prendra deux arguments :
        //le nom du champ (fieldName) à mettre à jour et la nouvelle valeur du champ (fieldValue).
        updateField: (state, action) => {
            return;
        },

        // Cette méthode peut simplement afficher dans la console les données actuelles du formulaire.
        onSubmit: (state, action) => {
            console.log("action.payload", action.payload);
        },
    },
});

export const { updateField, onSubmit } = formSlice.actions;
