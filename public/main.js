getCSS.onclick = () => {
  console.log("xxx");
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);

    if (request.readyState === 4) {
      if (request.status === 200) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const JS = document.createElement("script");
        JS.innerHTML = request.response;
        document.body.appendChild(JS);
      } else {
        alter("加载JS失败");
      }
    }
  };
  request.send();
};
getWords.onclick = () => {
  console.log("html");
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        console.log(request.response);

        document.body.appendChild(div);
      } else {
        alter("加载HTML失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        ("XML加载失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const object = JSON.parse(request.response);
        xxx.textContent = object.name;
      }
    }
  };
  request.send();
};
