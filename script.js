document.addEventListener("DOMContentLoaded", () => {
    const emojiGallery = document.getElementById("emoji-gallery");
// Gallery of emojis
    const emojis = [
        { emoji: "🐶", code: "128054" }, // Dog
        { emoji: "🐱", code: "128049" }, // Cat
        { emoji: "🐭", code: "128045" }, // Mouse
        { emoji: "🐰", code: "128048" }, // Rabbit
        { emoji: "🦊", code: "129418" }, // Fox
        { emoji: "🐻", code: "128059" }, // Bear
        { emoji: "🐼", code: "128060" }, // Panda
        { emoji: "🐨", code: "128040" }, // Koala
        { emoji: "🦁", code: "129409" }, // Lion
        { emoji: "🐸", code: "128056" }, // Frog
        { emoji: "🐵", code: "128053" }, // Monkey
        { emoji: "🐧", code: "128039" }, // Penguin
        { emoji: "🐢", code: "128034" }, // Turtle
        { emoji: "🦉", code: "129417" }, // Owl
        { emoji: "🐴", code: "128052" }  // Horse
    ];
// Loop through the emojis array and create a div element for each emoji
    emojis.forEach(item => {
        const emojiBox = document.createElement("div");
        emojiBox.classList.add("emoji-box");

        const emojiElement = document.createElement("span");
        emojiElement.classList.add("emoji");
        emojiElement.innerHTML = item.emoji;

        const codeElement = document.createElement("span");
        codeElement.classList.add("code");
        codeElement.innerHTML = `&#${item.code}; (${item.code})`;

        emojiBox.appendChild(emojiElement);
        emojiBox.appendChild(codeElement);
        emojiGallery.appendChild(emojiBox);
    });
});
