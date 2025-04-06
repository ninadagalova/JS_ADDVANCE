function solve() {
  let textArea = document.getElementById('input').value;
  let result = document.getElementById('output');

  let text = textArea.trim();

  if(text === ''){
    return;
  }

  let sentences = text.split('.')
  .filter(x => x.trim() !== '')
  .map(x => x.trim() + '.');

  if(sentences.length === 0){
    return;
  }

  let paragraf = Math.ceil(sentences.length/3);
  result.innerHTML = '';

  for(let i=0; i< paragraf; i++){
    let para = sentences.splice(0,3).join(' ');
    result.innerHTML +=`<p>${para}</p>`;
  }

}