import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = ["My Grandma", "The dog", "My friend", "The mailman"];
  let action = ["ate", "peed on", "burned", "lost"];
  let what = ["my homework", "my car", "the principal", "my backpack"];
  let when = ["before class.", "this morning.", "during my workout.", "last night."];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
}

window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
};