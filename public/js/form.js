window.onload = function() {

    function addRow(obj) {
        var tbody = document.querySelector("tbody");
        var template = document.querySelector('#template');
        var clone = template.content.cloneNode(true);
        var td = clone.querySelectorAll("td");
        td[0].textContent = obj.name;
        td[1].textContent = obj.lastName;
        td[2].textContent = obj.group;
        tbody.appendChild(clone);
    }

    function send(){
        let id = `f${(+new Date).toString(16)}`;
        let name = document.querySelector("#name").value;
        let lastName = document.querySelector("#lastName").value;
        let group = document.querySelector("#group").value;
        if (!(name == '' || lastName == '' || group == "Выберете группу")){
            localStorage.setItem(id.toString(), JSON.stringify({name, lastName, group}));
            addRow({name, lastName, group});
        }
    }
    const btn = document.querySelector('#send');
    btn.onclick = function () {
        send();
    };
}
