let message = document.querySelector(".Message");
let messageColor = message.querySelector(".Message-Color");

const clickHandler = (e) => {
  if (!e.target.id) {
    return;
  }

  const color = `#${e.target.id.replace(/r|g|b/g, "")}`;
  navigator.clipboard.writeText(color);

  messageColor.innerHTML = color;
  message.classList.remove("Message_animated");
  message.offsetWidth; // resetting animation
  message.classList.add("Message_animated");
};

document.body.addEventListener("click", clickHandler);
