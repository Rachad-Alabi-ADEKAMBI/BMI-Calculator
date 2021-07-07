    let cursor = document.getElementById("cursor");
    let btn_goal = document.getElementById("btn-goal");

    let cursor_weight = document.getElementById("cursor-weight");
    let btn_weight = document.getElementById("btn-weight")
    let cursor_weight_element = document.getElementById("cursor-weight-element")


    let cursor_weight_text = document.getElementById("cursor-weight-text")
    let cursor_text = document.getElementById("cursor-text")
    let submit = document.getElementById("submit");

    let arrow_goal = document.getElementById("arrow-goal")

    submit.addEventListener ("click", function(){
      cursor.style.bottom = btn_goal.value*5.5 + "px";
      cursor_text.style.display ="block";
      arrow_goal.innerHTML = btn_goal.value;

      cursor_weight.style.bottom = btn_weight.value*5.5 + "px";
      cursor_weight_element.innerHTML = btn_weight.value;
      cursor_weight_text.style.display = "block";

    })