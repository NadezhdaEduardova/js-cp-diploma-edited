function getRequest(body, callback) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jscp-diplom.netoserver.ru/", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.responseType = "json";
    xhr.send(body);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        if (callback) {
          callback(response);
        }
      }
    };

    xhr.onerror = () => {
      reject(xhr.statusText);
    };
  });
}
