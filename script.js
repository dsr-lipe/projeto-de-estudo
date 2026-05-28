function toggleMode() {
  // botao
  const html = document.documentElement

  // if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  // else {
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")
  // imagem
  const img = document.querySelector("#p0 img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlight.png")
    img.setAttribute("alt", "casal tirando uma foto no mar")
  } else {
    img.setAttribute("src", "./assets/avatardark.png")
    img.setAttribute(
      "alt",
      "foto de um casal durante seu casamento sentados numa poltrona",
    )
  }
}