window.onload = async function () {
    var tbody = document.querySelector("tbody");
    var template = document.querySelector('#template');

    function addRow(obj) {
        for (var i = 0; i < obj.length; i++) {
            var clone = template.content.cloneNode(true);
            var td = clone.querySelectorAll("td");
            td[0].textContent = obj[i].userId;
            td[1].textContent = obj[i].id;
            td[2].textContent = obj[i].title;
            td[3].textContent = obj[i].body;
            tbody.appendChild(clone);
        }
    }

    let id = Math.floor(Math.random() * 100);
    let str = "https://jsonplaceholder.typicode.com/comments/" + id.toString() + "/posts"
    let request = await fetch(str);
    if (request.ok) {
        let data = await request.json();
        addRow(data);
    } else {
        document.getElementById("json").innerHTML = "Что-то пошло не так"
    }
    request.onerror = function () {
        document.getElementById("json").innerHTML = "Что-то пошло не так"
    };
    request.send();
}

