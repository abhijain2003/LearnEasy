import wordBank from "../WordBank.txt";

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

export const WordGenerator = async () => {
    let wordSet;
    let sahiWord;
    await fetch(wordBank)
        .then((res) => res.text())
        .then((output) => {
            const wordArray = output.split("\n");
            sahiWord = wordArray[Math.floor(Math.random()* wordArray.length)]
            wordSet = new Set(wordArray)
            console.log(sahiWord);
        });
        return { wordSet, sahiWord }
};