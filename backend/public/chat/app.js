const price = 0.0002 / 1000;

const messages = [
  {
    role: "system",
    content:
      "You are a parent's coach. You are helping a parent and have all the history of the kids since they were born.",
  },
];
let totalTokens = 0;

async function sendChat() {
  const prompt = document.querySelector("#prompt").value;
  document.querySelector("#prompt").value = "";

  document.querySelector("ul").innerHTML +=
    `<li><strong>You:</strong> ${prompt}</li>`;
  messages.push({ role: "user", content: prompt });

  

  console.log(data);

  const answer = data.choices[0].message.content;
  messages.push(data.choices[0].message);

  document.querySelector("ul").innerHTML +=
    `<li><strong>AI:</strong> ${answer}</li>`;

  console.log(messages);

  document.querySelector("#prompt").value = "";
  document.querySelector("input").focus();
}
