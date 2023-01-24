function toggleMode() {
    const html = document.documentElement    
    //if (html.classList.contains('Light')) {
    //    html.classList.remove('Light')        
    //} else {
    //    html.classList.add('Light')
    //}
// Podemos substituir todo o condicional anterior pela funcionalidade 
// toggle, que faz a mesma função.  
   html.classList.toggle("Light")  
// trocar a imagem 
//pegar a tag img 
const img = document.querySelector('#profile img')
// substituir a imagem
// se tiver light mode, adicioanr a imagem light
if(html.classList.contains('Light')) {
    img.setAttribute('src', './assets/avatar-light.png')    
}
// se não tiver sem light mode, manter a imagem normal
 else {
    img.setAttribute('src', './assets/avatar.png')
}
}
