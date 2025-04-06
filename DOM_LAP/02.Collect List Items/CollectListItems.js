function extractText() {
    let item = document.querySelectorAll("ul#items li")
    let text = document.querySelector("#result");
    
for( let node of item){
    text.value += node.textContent +"\n";
}
}