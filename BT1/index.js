function AddTask(){
    var task = document.querySelector("#taskbox");
    if(task.value != ""){
        var elementp = document.querySelector("p");
        if(elementp != null)
        {
            elementp.remove();
        }
        // Start Add task
        var UnorderListEle = document.querySelector(".todolist");
        var liEle = document.createElement("li");
        var inputEle = document.createElement("input");
        var spanEle = document.createElement("span");
        var buttonEle = document.createElement("button");
        UnorderListEle.insertAdjacentElement("afterbegin",liEle);
        liEle.insertAdjacentElement("afterbegin",spanEle);
        liEle.insertAdjacentElement("afterbegin",inputEle);
        liEle.insertAdjacentElement("beforeend",buttonEle);
        liEle.getElementsByTagName("input")[0].setAttribute("type","checkbox");
        liEle.getElementsByTagName("span")[0].setAttribute("contenteditable","true");
        liEle.getElementsByTagName("span")[0].setAttribute("class","editable");
        liEle.getElementsByTagName("span")[0].innerHTML = task.value;
        liEle.getElementsByTagName("button")[0].setAttribute("class","delete");
        liEle.getElementsByTagName("button")[0].innerHTML = "Delete";
        task.value = "";
        //End Add Task
        document.querySelector(".delete").addEventListener("click", function (something){
            something.path[1].remove();
            if(UnorderListEle.childElementCount == 0)
            {
                UnorderListEle.innerHTML = `<p>Nothing to do.</p>`;
            }
        })
        document.querySelector("input[type='checkbox']").addEventListener("click", function (something){
            if(document.querySelector("input[type='checkbox']").checked)
            {
                var valueCheckbox = something.path[1].childNodes[1].innerText;
                something.path[1].childNodes[1].innerHTML = " ";
                something.path[1].childNodes[1].innerHTML = `<s> ${valueCheckbox} </s>`;
            } else {
                var valueCheckbox = something.path[1].childNodes[1].innerText;
                something.path[1].childNodes[1].innerHTML = " ";
                something.path[1].childNodes[1].innerHTML = `${valueCheckbox}`;
            }
        })
    } else {

    }
}