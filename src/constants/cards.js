const images = [
    "javascript.png",
    "nextjs.png",
    "nodejs.png",
    "reactjs.png",
    "typescript.png",
    "vitejs.png",
];

const uniqueCards = images.map((image, idOfPair) => {
    return {
        idOfPair: 1,
        image,
    };
})

export const pairsOfCards = [...uniqueCards, ...uniqueCards].map((card, id) => {
    return {
        ...card,
        id,
    };
})