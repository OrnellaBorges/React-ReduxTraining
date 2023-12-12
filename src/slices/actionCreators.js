/* ici e crée une petite function qui 
va me permettre d'etre utilisé dans le dispatch 
lorsque je vais clicquer sur la checkbox
pour envoyer de la donné a redux */

//besoin de l'id pour modifier la tache
export const createToggle = (id) => {
    return {
        type: "todo/toggleTask",
        payload: id,
    };
};
