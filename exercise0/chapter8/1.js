
function randomSentence() {
    const sentences = [
        "I think, therefore I am.",
        "The unexamined life is not worth living.",
        "He who has a why to live can bear almost any how.",
        "Knowledge which is acquired under compulsion obtains no hold on the mind.",
        "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
        "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
        "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
        "It does not matter how slowly you go as long as you do not stop.",
        "The journey of a thousand miles begins with a single step.",
        "The philosophers have only interpreted the world in various ways; the point, however, is to change it.",
    ];
    setInterval(function() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        console.log(sentences[randomIndex]);
    }, 60000);
}

randomSentence();
