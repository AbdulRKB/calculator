const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function start() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://xzcvc.onrender.com');
    iframe.style.position = 'fixed';
    iframe.style.top = '50%';
    iframe.style.left = '50%';
    iframe.style.transform = 'translate(-50%, -50%)';
    iframe.style.border = '2px solid white';
    iframe.style.width = '85%';
    iframe.style.height = '85%';
    iframe.style.zIndex = '9999';
    iframe.style.backgroundColor = '#111'
    iframe.style.borderRadius = '20px';

    var closeButton = document.createElement('button');
    closeButton.style.position = 'fixed';
    closeButton.value = '&times;';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = '#000';
    closeButton.style.backgroundColor = '#223323';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '20px';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10000';

    closeButton.addEventListener('click', function() {
        iframe.remove();
        closeButton.remove();
    });

    document.body.appendChild(iframe);
    document.body.appendChild(closeButton);
};

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      result = eval(display.innerText)
      display.innerText = result;
      if (result == 45){start()}
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});