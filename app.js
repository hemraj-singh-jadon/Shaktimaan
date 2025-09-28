//Nothing to add

let imgs = document.querySelectorAll("img")

console.log(imgs)

for (img of imgs) {
    img.addEventListener("click",function() {
    img.style.display = 'none' })
}
