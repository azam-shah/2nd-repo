let body = document.querySelector("body")
let navbar = document.createElement("div")
navbar.style.display = "flex"
navbar.style.justifyContent = "center"
body.appendChild(navbar)

let header = document.createElement("div")
header.style.width = "80%"
header.style.display = "flex"
header.style.justifyContent = "space-between"
navbar.appendChild(header)

let logo = document.createElement("img")
logo.setAttribute('src' , 'Logo (7).png')
logo.style.paddingTop = "20px"
header.appendChild(logo)

let links = document.createElement("div")
links.style.width = "20%"
links.style.display = "flex"
links.style.justifyContent = "space-between"
links.style.paddingTop = "20px"
header.appendChild(links)

let link1 = document.createElement("a")
link1.innerHTML = "Sign Up"
link1.style.marginTop = "15px"
links.appendChild(link1)

let link2 = document.createElement("button")
link2.innerHTML = "Log in"
link2.style.backgroundColor = "#3366FF"
link2.style.border = "1px solid #3366FF"
link2.style.color = "white"
link2.style.padding = "15px"
link2.style.paddingLeft = "45px"
link2.style.paddingRight = "45px"
link2.style.fontSize = "15px"
link2.style.borderRadius = "10px"
links.appendChild(link2)


// second section start


let main = document.createElement("div")
main.style.display = "flex"
main.style.justifyContent = "center"
main.style.backgroundColor = "#F7F5FD"
main.style.marginTop = "30px"
body.appendChild(main)

let hero = document.createElement("div")
hero.style.width = "80%"
hero.style.display = "flex"
hero.style.padding = "70px"
main.appendChild(hero)

let main2 = document.createElement("div")
hero.appendChild(main2)

let head = document.createElement("div")
head.style.maxWidth = "60%"
head.style.fontSize = "80px"
head.innerHTML = "Pet Store & Beyond"
main2.appendChild(head)

let pera = document.createElement("div")
pera.style.width = "65%"
pera.innerHTML = "This is a sample landing page, created with Figma and Anima. No coding involved."
pera.style.fontSize = "20px"
pera.style.color = "#2D2D2D"
pera.style.fontWeight = "400"
pera.style.paddingTop = "30px"
main2.appendChild(pera)

let btn2 = document.createElement("button")
btn2.innerHTML = "Get Started"
btn2.style.backgroundColor = "#F8D57E"
btn2.style.border = "1px solid #F8D57E"
btn2.style.padding = "15px"
btn2.style.paddingLeft = "35px"
btn2.style.paddingRight = "35px"
btn2.style.marginTop = "50px"
btn2.style.borderRadius = "8px"
main2.appendChild(btn2)

let image = document.createElement("img")
image.setAttribute('src' , 'Image (11).png')
hero.appendChild(image)

// third section start

let dogdiv  = document.createElement("div")
dogdiv.style.display = "flex"
dogdiv.style.justifyContent = "center"
dogdiv.style.position = "relative"
dogdiv.style.backgroundColor = "#F2FAF8"
body.appendChild(dogdiv)

let dogdiv2 = document.createElement("div")
dogdiv2.style.width = "80%"
dogdiv2.style.padding = "80px"
dogdiv2.style.display = "flex"
dogdiv2.style.justifyContent = "center"
dogdiv.appendChild(dogdiv2)

let image2 = document.createElement("img")
image2.setAttribute('src' , 'Image (12).png')
dogdiv2.appendChild(image2)

let shadow = document.createElement("img")
shadow.setAttribute('src' , 'Rectangle.png')
shadow.style.position = "absolute"
dogdiv2.appendChild(shadow)

let playbtn = document.createElement("img")
playbtn.setAttribute('src' , 'Polygon.png')
playbtn.style.position = "absolute"
playbtn.style.top = "290px"
dogdiv2.appendChild(playbtn)


// fourth section start

let logodiv = document.createElement("div")
logodiv.style.display = "flex"
logodiv.style.justifyContent = "center"
body.appendChild(logodiv)

let logos = document.createElement("div")
logos.style.width = "75%"
logos.style.display = "flex"
logos.style.justifyContent = "space-between"
logos.style.marginTop = "80px"
logodiv.appendChild(logos)

let logo1 = document.createElement("img")
logo1.setAttribute('src' , 'Nestle.png')
logos.appendChild(logo1)

let logo2 = document.createElement("img")
logo2.setAttribute('src' , 'Apple.png')
logos.appendChild(logo2)

let logo3 = document.createElement("img")
logo3.setAttribute('src' , 'Frame.png')
logos.appendChild(logo3)

let logo4 = document.createElement("img")
logo4.setAttribute('src' , 'Amazon.png')
logos.appendChild(logo4)

let logo5 = document.createElement("img")
logo5.setAttribute('src' , 'Google.png')
logos.appendChild(logo5)

let logo6 = document.createElement("img")
logo6.setAttribute('src' , 'Walmart.png')
logos.appendChild(logo6)

// fifth section start

let box = document.createElement("div")
box.style.display = "flex"
box.style.justifyContent = "center"
body.appendChild(box)

let box1 = document.createElement("div")
box1.style.width = "90%"
box1.style.display = "flex"
box1.style.justifyContent = "space-between"
box1.style.marginTop = "200px"
box.appendChild(box1)

let card1 = document.createElement("div")
card1.style.width = "25%"
card1.style.textAlign = "center"
box1.appendChild(card1)

let img = document.createElement("img")
img.setAttribute('src' , 'Pet food icon.png')
card1.appendChild(img)

let tittle = document.createElement("div")
tittle.innerHTML = "Best quality pet food"
tittle.style.fontSize = "20px"
tittle.style.fontWeight = "bold"
tittle.style.paddingTop = "20px"
card1.appendChild(tittle)

let desc = document.createElement("div")
desc.innerHTML = "Super delicious food. Available in a range of delicious flavors."
desc.style.maxWidth = "57%"
desc.style.marginLeft = "65px"
desc.style.fontSize = "17px"
desc.style.paddingTop = "10px"
desc.style.color = "#2D2D2D"
card1.appendChild(desc)


let card2 = document.createElement("div")
card2.style.width = "25%"
card2.style.textAlign = "center"
box1.appendChild(card2)

let img2 = document.createElement("img")
img2.setAttribute('src' , 'Accessories icon.png')
card2.appendChild(img2)

let tittle2 = document.createElement("div")
tittle2.innerHTML = "Toys & Accessories"
tittle2.style.fontSize = "20px"
tittle2.style.fontWeight = "bold"
tittle2.style.paddingTop = "20px"
card2.appendChild(tittle2)

let desc2 = document.createElement("div")
desc2.innerHTML = "Soft toys, chew toys, and rope toys. Strong, interactive, and fun."
desc2.style.maxWidth = "59%"
desc2.style.marginLeft = "65px"
desc2.style.fontSize = "17px"
desc2.style.paddingTop = "10px"
desc2.style.color = "#2D2D2D"
card2.appendChild(desc2)

// card3

let card3 = document.createElement("div")
card3.style.width = "25%"
card3.style.textAlign = "center"
box1.appendChild(card3)

let img3 = document.createElement("img")
img3.setAttribute('src' , 'Medical icon.png')
card3.appendChild(img3)

let tittle3 = document.createElement("div")
tittle3.innerHTML = "Pets medical care"
tittle3.style.fontSize = "20px"
tittle3.style.fontWeight = "bold"
tittle3.style.paddingTop = "20px"
card3.appendChild(tittle3)

let desc3 = document.createElement("div")
desc3.innerHTML = "You can get a wide range of great treatments for your dog."
desc3.style.maxWidth = "56%"
desc3.style.marginLeft = "70px"
desc3.style.fontSize = "17px"
desc3.style.paddingTop = "10px"
desc3.style.color = "#2D2D2D"
card3.appendChild(desc3)

// // card4

let card4 = document.createElement("div")
card4.style.width = "25%"
card4.style.textAlign = "center"
box1.appendChild(card4)

let img4 = document.createElement("img")
img4.setAttribute('src' , 'Illustration.png')
img4.style.marginTop = "10px"
card4.appendChild(img4)

let tittle4 = document.createElement("div")
tittle4.innerHTML = "Full service grooming"
tittle4.style.fontSize = "20px"
tittle4.style.fontWeight = "bold"
tittle4.style.paddingTop = "38px"
card4.appendChild(tittle4)

let desc4 = document.createElement("div")
desc4.innerHTML = "It's the right time to groom your dog with a variety of treatments."
desc4.style.maxWidth = "57%"
desc4.style.marginLeft = "70px"
desc4.style.fontSize = "17px"
desc4.style.paddingTop = "10px"
desc4.style.color = "#2D2D2D"
card4.appendChild(desc4)


// sixth section start


let man = document.createElement("div")
man.style.display = "flex"
man.style.justifyContent = "center"
man.style.backgroundColor = "#ECE7FB"
man.style.marginTop = "100px"
body.appendChild(man)

let box2 = document.createElement("div")
box2.style.display = "flex"
box2.style.justifyContent = "space-between"
box2.style.width = "65%"
box2.style.paddingTop = "50px"
box2.style.paddingBottom = "50px"
man.appendChild(box2)

let manimg = document.createElement("img")
manimg.setAttribute('src' , 'Image (Desktop).png')
box2.appendChild(manimg)

let descbox = document.createElement("div")
descbox.style.width = "50%"
descbox.style.marginTop = "50px"
box2.appendChild(descbox)

let coma = document.createElement("img")
coma.setAttribute('src' , 'Quote icon.png')
descbox.appendChild(coma)

let cpera = document.createElement("div")
cpera.innerHTML = "We love using 'PETWORLD' products.  Environmentally friendly and sustainable. We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money."
cpera.style.width = "80%"
cpera.style.paddingTop = "20px"
cpera.style.fontSize = "20px"
cpera.style.fontWeight = "bold"
descbox.appendChild(cpera)

let names = document.createElement("div")
names.innerHTML = "Dylan Shaw"
names.style.color = "#2D2D2D"
names.style.paddingTop = "40px"
descbox.appendChild(names)


// seventh section start

let main3 = document.createElement("div")
main3.style.display = "flex"
main3.style.justifyContent = "center"
main3.style.backgroundColor = "#FCFAF5"
body.appendChild(main3)

let hero2 = document.createElement("div")
hero2.style.width = "80%"
hero2.style.display = "flex"
hero2.style.padding = "70px"
main3.appendChild(hero2)

let main4 = document.createElement("div")
hero2.appendChild(main4)

let head2 = document.createElement("div")
head2.style.maxWidth = "70%"
head2.style.fontSize = "80px"
head2.innerHTML = "Let’s talk, woof! "
head2.style.fontWeight = "bold"
main4.appendChild(head2)

let pera2 = document.createElement("div")
pera2.style.width = "63%"
pera2.innerHTML = "You can ask us questions about your pet, and we will be happy to answer you!"
pera2.style.fontSize = "20px"
pera2.style.color = "#2D2D2D"
pera2.style.fontWeight = "400"
pera2.style.paddingTop = "30px"
main4.appendChild(pera2)

let btn21 = document.createElement("button")
btn21.innerHTML = "Contact us"
btn21.style.backgroundColor = "#F8D57E"
btn21.style.border = "1px solid #F8D57E"
btn21.style.padding = "15px"
btn21.style.paddingLeft = "35px"
btn21.style.paddingRight = "35px"
btn21.style.marginTop = "50px"
btn21.style.borderRadius = "8px"
main4.appendChild(btn21)

let image5 = document.createElement("img")
image5.setAttribute('src' , 'Image (13).png')
hero2.appendChild(image5)


// lasst section start


let footer = document.createElement("div")
footer.style.display = "flex"
footer.style.justifyContent = "center"
footer.style.marginTop = "70px"
body.appendChild(footer)


let box3 = document.createElement("div")
box3.style.width = "90%"
box3.style.display = "flex"
footer.appendChild(box3)

let lbox2 = document.createElement("div")
lbox2.style.width = "65%"
box3.appendChild(lbox2)

let fimg = document.createElement("img")
fimg.setAttribute('src' , 'Logo (7).png')
lbox2.appendChild(fimg)

let fpera = document.createElement("div")
fpera.innerHTML = "Updates right to your Inbox"
fpera.style.position = "relative"
fpera.style.top = "80px"
fpera.style.fontSize = "20px"
fpera.style.fontWeight = "bold"
lbox2.appendChild(fpera)

let searchbox = document.createElement("div")
searchbox.style.width = "50%"
searchbox.style.marginTop = "90px"
lbox2.appendChild(searchbox)

let search = document.createElement("a")
search.innerHTML = "Email Address"
search.style.border = "1px solid black"
search.style.padding = "10px"
search.style.borderRadius = "8px"
search.style.paddingRight = "130px"
searchbox.appendChild(search)

let btn22 = document.createElement("button")
btn22.innerHTML = "Send"
btn22.style.backgroundColor = "#3366FF"
btn22.style.border = "1px solid #3366FF"
btn22.style.padding = "12px"
btn22.style.paddingLeft = "35px"
btn22.style.paddingRight = "35px"
btn22.style.borderRadius = "10px"
btn22.style.color = "white"
btn22.style.marginLeft = "50px"
searchbox.appendChild(btn22)

let boxagain = document.createElement("div")
boxagain.style.width = "35%"
boxagain.style.display = "flex"
boxagain.style.justifyContent = "space-between"
box3.appendChild(boxagain)

let lbox = document.createElement("div")
lbox.style.display = "flex"
lbox.style.gap = "18px"
lbox.style.flexDirection = "column"
// lbox.style.marginLeft = "100px"
boxagain.appendChild(lbox)

let ltittle = document.createElement("div")
ltittle.innerHTML = "Our story"
ltittle.style.fontWeight = "bold"
ltittle.style.fontSize = "20px"
lbox.appendChild(ltittle)

let llink = document.createElement("a")
llink.innerHTML = "FAQ"
lbox.appendChild(llink)

let llink2 = document.createElement("a")
llink2.innerHTML = "Contact"
llink2.style.display = "flex"
llink2.style.flexDirection = "column"
lbox.appendChild(llink2)


let care = document.createElement("div")
care.style.display = "flex"
care.style.gap = "18px"
care.style.flexDirection = "column"
boxagain.appendChild(care)

let ctittle = document.createElement("div")
ctittle.innerHTML = "Pet care"
ctittle.style.fontWeight = "bold"
ctittle.style.fontSize = "20px"
care.appendChild(ctittle)

let clink = document.createElement("a")
clink.innerHTML = "Treatments"
clink.style.display = "flex"
clink.style.flexDirection = "column"
care.appendChild(clink)

let clink2 = document.createElement("a")
clink2.innerHTML = "Health "
clink2.style.display = "flex"
clink2.style.flexDirection = "column"
care.appendChild(clink2)

let clink3 = document.createElement("a")
clink3.innerHTML = "Hygiene "
clink3.style.display = "flex"
clink3.style.flexDirection = "column"
care.appendChild(clink3)


let care2 = document.createElement("div")
care2.style.display = "flex"
care2.style.gap = "18px"
care2.style.flexDirection = "column"
boxagain.appendChild(care2)

let stittle = document.createElement("div")
stittle.innerHTML = "Shop"
stittle.style.fontWeight = "bold"
stittle.style.fontSize = "20px"
care2.appendChild(stittle)

let slink = document.createElement("a")
slink.innerHTML = "Pet Food"
slink.style.display = "flex"
slink.style.flexDirection = "column"
care2.appendChild(slink)

let slink2 = document.createElement("a")
slink2.innerHTML = "Toys "
slink2.style.display = "flex"
slink2.style.flexDirection = "column"
care2.appendChild(slink2)

let slink3 = document.createElement("a")
slink3.innerHTML = "Accessories "
slink3.style.display = "flex"
slink3.style.flexDirection = "column"
care2.appendChild(slink3)


let akhri = document.createElement("div")
akhri.style.display = "flex"
akhri.style.justifyContent = "center"
body.appendChild(akhri)

let akhribox = document.createElement("div")
akhribox.style.width = "90%"
akhribox.style.display = "flex"
akhribox.style.justifyContent = "space-between"
akhribox.style.marginTop = "50px"
akhri.appendChild(akhribox)

let perabox = document.createElement("div")
perabox.style.display = "flex"
perabox.style.justifyContent = "space-between"
perabox.style.width = "37%"
akhribox.appendChild(perabox)

let pera1 = document.createElement("div")
pera1.innerHTML = "©  PETWORLD 2022"
pera1.style.fontSize ="18px"
pera1.style.fontWeight = "bold"
perabox.appendChild(pera1)

let phera = document.createElement("div")
phera.innerHTML = "Privacy Policy"
phera.style.fontSize ="18px"
phera.style.fontWeight = "bold"
perabox.appendChild(phera)

let phera2 = document.createElement("div")
phera2.innerHTML = "Terms of use"
phera2.style.fontSize ="18px"
phera2.style.fontWeight = "bold"
perabox.appendChild(phera2)

let perabox2 = document.createElement("div")
perabox2.style.display = "flex"
perabox2.style.justifyContent = "space-between"
perabox2.style.width = "15%"
akhribox.appendChild(perabox2)

let logoimg = document.createElement("img")
logoimg.setAttribute('src' , 'Facebook.png')
perabox2.appendChild(logoimg)

let logoim = document.createElement("img")
logoim.setAttribute('src' , 'Linkedin.png')
perabox2.appendChild(logoim)

let logoi = document.createElement("img")
logoi.setAttribute('src' , 'Instagram.png')
perabox2.appendChild(logoi)

let logoi2 = document.createElement("img")
logoi2.setAttribute('src' , 'Twitter.png')
perabox2.appendChild(logoi2)














