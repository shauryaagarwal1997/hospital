var bg1I;
var bg2I;
var appState=0;
var startBut;
var maskI,mask,saniI,sani,disI,dis,stay,stayI;
var w,wI;
var aaryan,aiims,arihant,cityheart,max,cmi,kailash,kanishk,ongc,subharti,synergy,shed;
var aaryanhr1,aaryanhr2,aaryanhr3;
var aiimshr1,aiimshr2,aiimshr3;
var arihanthr1,arihanthr2,arihanthr3;
var cityhearthr1,cityhearthr2,cityhearthr3;
var maxhr1,maxhr2,maxhr3,maxhr4,maxhr5,maxhr6;
var cmihr1,cmihr2,cmihr3,cmihr4,cmihr5;
var kailashhr1,kailashhr2,kailashhr3;
var kanishkhr1,kanishkhr2,kanishkhr3;
var ongchr1,ongchr2,ongchr3;
var subhartihr1,subhartihr2,subhartihr3;
var synergyhr1,synergyhr2,synergyhr3,synergyhr4,synergyhr5;
var shedhr1,shedhr2,shedhr3;

function preload(){
    maskI=loadImage("mask.jpg");
    disI=loadImage("dis.png");
    saniI=loadImage("sani.png");
    bg1I=loadImage("h.jpg");
    bg2I=loadImage("hh.png");
    wI=loadImage("g.png");

    aaryanH();
}

function setup(){
createCanvas(displayWidth,displayHeight-150);

startBut=createButton('LETS CHECK')
startBut.size(330,60);
startBut.style('background','yellow')

w=createSprite(displayWidth/2+30,displayHeight/2-380);
mask=createSprite(displayWidth/2-50,displayHeight/2-400);
sani=createSprite(displayWidth/2-500,displayHeight/2+100);
dis=createSprite(displayWidth/2+500,displayHeight/2+100);

aaryan=createButton('AARYAN HOSPITAL DOIWALA')
aaryan.style('background','yellow');
aaryan.size(330,80);
aiims=new button('AIIMS RISHIKESH')
arihant=new button('ARIHANT HOSPITAL')
cityheart=createButton('CITY HEART CENTER')
cityheart.size(330,80);
cityheart.style('background','yellow');
max=new button('MAX HOSPITAL')
cmi=new button('CMI HOSPITAL')
kailash=new button('KAILASH HOSPITAL')
kanishk=new button('KANISHK HOSPITAL')
ongc=new button('ONGC HOSPITAL')
subharti=new button('SUBHARTI HOSPITAL')
synergy=new button('SYNERGY HOSPITAL')
shed=new button('SHED HOSPITAL')

}

function draw(){
if(appState===0){
background("orange");

textSize(60);
fill("black");
stroke(0);
strokeWeight(4);
text("DEHRADUN COVID - 19 HOSPITAL BEDS DATA",displayWidth/2-650,displayHeight/2-170);

startBut.position(displayWidth/2-200,displayHeight/2-120);

mask.addImage(maskI);
mask.scale=1.6;

sani.addImage(saniI);
sani.scale=2;

dis.addImage(disI);
dis.scale=2.2;

drawSprites();

startBut.mousePressed(()=>{
    appState=1;
})
}

if(appState===1){
    background(bg2I)
    startBut.position(displayWidth/2-32100,displayHeight/2-120);

    textSize(60);
    fill("black");
    stroke(0);
    strokeWeight(4);
    text("DEHRADUN COVID - 19 HOSPITAL BEDS DATA",displayWidth/2-650,100);

    aaryan.position(displayWidth/2-430,displayHeight/2-350);
    aiims.bt.position(displayWidth/2-430,displayHeight/2-260);
    arihant.bt.position(displayWidth/2-430,displayHeight/2-190);
    cmi.bt.position(displayWidth/2-430,displayHeight/2-120);
    max.bt.position(displayWidth/2-430,displayHeight/2-50);
    shed.bt.position(displayWidth/2-430,displayHeight/2+20);

    cityheart.position(displayWidth/2+100,displayHeight/2-350);
    kailash.bt.position(displayWidth/2+100,displayHeight/2-260);
    kanishk.bt.position(displayWidth/2+100,displayHeight/2-190);
    ongc.bt.position(displayWidth/2+100,displayHeight/2-120);
    subharti.bt.position(displayWidth/2+100,displayHeight/2-50);
    synergy.bt.position(displayWidth/2+100,displayHeight/2+20);


    aaryan.mousePressed(()=>{
        appState=2;
    })
    aiims.bt.mousePressed(()=>{
        appState=3;
    })
    arihant.bt.mousePressed(()=>{
        appState=4;
    })
    cityheart.mousePressed(()=>{
        appState=5;
    })
    cmi.bt.mousePressed(()=>{
        appState=6;
    })
    max.bt.mousePressed(()=>{
        appState=7;
    })
    shed.bt.mousePressed(()=>{
        appState=8;
    })
    kailash.bt.mousePressed(()=>{
        appState=9;
    })
    kanishk.bt.mousePressed(()=>{
        appState=10;
    })
    ongc.bt.mousePressed(()=>{
        appState=11;
    })
    subharti.bt.mousePressed(()=>{
        appState=12;
    })
    synergy.bt.mousePressed(()=>{
        appState=13;
    })
}
if(appState===2){
    background(bg1I);
    mask.x=10000000;
    sani.x=10000000;
    dis.x=10000000;

    aaryan.hide();
    aiims.bt.hide();
    arihant.bt.hide();
    cmi.bt.hide();
    max.bt.hide();
    shed.bt.hide();
    cityheart.hide();
    kailash.bt.hide();
    kanishk.bt.hide();
    ongc.bt.hide();
    subharti.bt.hide();
    synergy.bt.hide();

    w.addImage(wI);
    w.scale=3;

    drawSprites();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3);
    text("AARYAN HOSPITAL DOIWALA",displayWidth/2-400,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-450,displayHeight/2-230);
    fill("red")
    text("Doiwala, Uttarakhand",displayWidth/2-120,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-450,displayHeight/2-150);
    fill("red")
    text(aaryanhr1,displayWidth/2+140,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-450,displayHeight/2-70);
    fill("red")
    text(aaryanhr2,displayWidth/2+510,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-450,displayHeight/2+10);
    fill("red")
    text(aaryanhr3,displayWidth/2+200,displayHeight/2+10);

}
if(appState===3){
    aiims.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("AIIMS RISHIKESH",displayWidth/2-200,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-450,displayHeight/2-230);
    fill("red")
    text("AIIMS, Rishikesh, Uttarakhand",displayWidth/2-120,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-450,displayHeight/2-150);
    fill("red")
    text(aiimshr1,displayWidth/2+140,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-450,displayHeight/2-70);
    fill("red")
    text(aiimshr2,displayWidth/2+510,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-450,displayHeight/2+10);
    fill("red")
    text(aiimshr3,displayWidth/2+200,displayHeight/2+10);

}
if(appState===4){
    arihant.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("ARIHANT HOSPITAL",displayWidth/2-300,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-750,displayHeight/2-230);
    fill("red")
    text(" 18, Main, Haridwar Rd, Ajabpur Kalan, Dehradun",displayWidth/2-420,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-750,displayHeight/2-150);
    fill("red")
    text(arihanthr1,displayWidth/2-160,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-750,displayHeight/2-70);
    fill("red")
    text(arihanthr2,displayWidth/2+210,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-750,displayHeight/2+10);
    fill("red")
    text(arihanthr3,displayWidth/2-100,displayHeight/2+10);
}
if(appState===5){
    background(bg1I);
    mask.x=10000000;
    sani.x=10000000;
    dis.x=10000000;

    aaryan.hide();
    aiims.bt.hide();
    arihant.bt.hide();
    cmi.bt.hide();
    max.bt.hide();
    shed.bt.hide();
    cityheart.hide();
    kailash.bt.hide();
    kanishk.bt.hide();
    ongc.bt.hide();
    subharti.bt.hide();
    synergy.bt.hide();

    w.addImage(wI);
    w.scale=3;

    drawSprites();

    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("CITY HEART CENTER",displayWidth/2-300,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-650,displayHeight/2-230);
    fill("red")
    text("55, EC Road, Panchpuri Colony, Dalanwala",displayWidth/2-320,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-650,displayHeight/2-150);
    fill("red")
    text(cityhearthr1,displayWidth/2-60,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-650,displayHeight/2-70);
    fill("red")
    text(cityhearthr2,displayWidth/2+310,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-650,displayHeight/2+10);
    fill("red")
    text(cityhearthr3,displayWidth/2,displayHeight/2+10);

}
if(appState===6){
    cmi.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("CMI HOSPITAL",displayWidth/2-200,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("54, Haridwar Rd, Guru Nanak Vihar",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(cmihr4+" / "+cmihr5,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(cmihr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(cmihr3,displayWidth/2+50,displayHeight/2+10);
}
if(appState===7){
    max.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("MAX HOSPITAL",displayWidth/2-200,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("Mussoorie, Diversion Road, Dehradun",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(maxhr4+" / "+maxhr5,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(maxhr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(maxhr3,displayWidth/2+50,displayHeight/2+10);

}
if(appState===8){
    shed.display();
    background(bg1I);
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("SHED HOSPITAL",displayWidth/2-200,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("Ambala-Dehradun-Haridwar Rd, Doiwala",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(shedhr1,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(shedhr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(shedhr3,displayWidth/2+50,displayHeight/2+10);

}
if(appState===9){
    kailash.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("KAILASH HOSPITAL",displayWidth/2-230,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("Main, Haridwar Rd, Jogiwala Chowk",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(kailashhr1,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(kailashhr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(kailashhr3,displayWidth/2+50,displayHeight/2+10);
}
if(appState===10){
    kanishk.display();
    background(bg1I);
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("KANISHK HOSPITAL",displayWidth/2-230,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("ISBT Road, Haridwar Bypass Rd, DDN",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(kanishkhr1,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(kanishkhr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(kanishkhr3,displayWidth/2+50,displayHeight/2+10);

}
if(appState===11){
    ongc.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("ONGC HOSPITAL",displayWidth/2-230,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("90, Kaulagarh Road, Krishna Nagar",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(ongchr1,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(ongchr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(ongchr3,displayWidth/2+50,displayHeight/2+10);
}
if(appState===12){
    subharti.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("SUBHARTI HOSPITAL",displayWidth/2-250,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("Subharti Hospital Rd Dehradun",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(subhartihr1,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(subhartihr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(subhartihr3,displayWidth/2+50,displayHeight/2+10);
}
if(appState===13){
    synergy.display();
    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text("SYNERGY HOSPITAL",displayWidth/2-250,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-600,displayHeight/2-230);
    fill("red")
    text("Canal Rd, P.O, Ballupur, Dehradun",displayWidth/2-270,displayHeight/2-230);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-600,displayHeight/2-150);
    fill("red")
    text(synergyhr4+" / "+synergyhr5,displayWidth/2-10,displayHeight/2-150);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-600,displayHeight/2-70);
    fill("red")
    text(synergyhr2,displayWidth/2+360,displayHeight/2-70);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-600,displayHeight/2+10);
    fill("red")
    text(synergyhr3,displayWidth/2+50,displayHeight/2+10);
}

}
async function aaryanH(){
    var response=await fetch("https://api.covidbedsindia.in/v1/storages/608d542333382c01aecf8c95/Uttarakhand")
    var responseJSON=await response.json();

    aaryanhr1=responseJSON[0].NODAL_OFFICER_NUMBER;
    aaryanhr2=responseJSON[0].BEDS_WITH_OXYGEN_AVAILABLE;
    aaryanhr3=responseJSON[0].ICU_BEDS_AVAILABLE;

    aiimshr1=responseJSON[1].NODAL_OFFICER_NUMBER;
    aiimshr2=responseJSON[1].BEDS_WITH_OXYGEN_AVAILABLE;
    aiimshr3=responseJSON[1].ICU_BEDS_AVAILABLE;

    arihanthr1=responseJSON[5].NODAL_OFFICER_NUMBER;
    arihanthr2=responseJSON[5].BEDS_WITH_OXYGEN_AVAILABLE;
    arihanthr3=responseJSON[5].ICU_BEDS_AVAILABLE;

    cityhearthr1=responseJSON[21].NODAL_OFFICER_NUMBER;
    cityhearthr2=responseJSON[21].BEDS_WITH_OXYGEN_AVAILABLE;
    cityhearthr3=responseJSON[21].ICU_BEDS_AVAILABLE;

    cmihr1=responseJSON[25].NODAL_OFFICER_NUMBER;
    cmihr2=responseJSON[25].BEDS_WITH_OXYGEN_AVAILABLE;
    cmihr3=responseJSON[25].ICU_BEDS_AVAILABLE;
    cmihr4=cmihr1.slice(0,11);
    cmihr5=cmihr1.slice(12,24);

    maxhr1=responseJSON[94].NODAL_OFFICER_NUMBER;
    maxhr2=responseJSON[94].BEDS_WITH_OXYGEN_AVAILABLE;
    maxhr3=responseJSON[94].ICU_BEDS_AVAILABLE;
    maxhr4=maxhr1.slice(0,11);
    maxhr5=maxhr1.slice(12,22);
    maxhr6=maxhr1.slice(23,36);

    shedhr1=responseJSON[130].NODAL_OFFICER_NUMBER;
    shedhr2=responseJSON[130].BEDS_WITH_OXYGEN_AVAILABLE;
    shedhr3=responseJSON[130].ICU_BEDS_AVAILABLE;

    kailashhr1=responseJSON[77].NODAL_OFFICER_NUMBER;
    kailashhr2=responseJSON[77].BEDS_WITH_OXYGEN_AVAILABLE;
    kailashhr3=responseJSON[77].ICU_BEDS_AVAILABLE;

    kanishkhr1=responseJSON[80].NODAL_OFFICER_NUMBER;
    kanishkhr2=responseJSON[80].BEDS_WITH_OXYGEN_AVAILABLE;
    kanishkhr3=responseJSON[80].ICU_BEDS_AVAILABLE;

    ongchr1=responseJSON[107].NODAL_OFFICER_NUMBER;
    ongchr2=responseJSON[107].BEDS_WITH_OXYGEN_AVAILABLE;
    ongchr3=responseJSON[107].ICU_BEDS_AVAILABLE;

    subhartihr1=responseJSON[146].NODAL_OFFICER_NUMBER;
    subhartihr2=responseJSON[146].BEDS_WITH_OXYGEN_AVAILABLE;
    subhartihr3=responseJSON[146].ICU_BEDS_AVAILABLE;

    synergyhr1=responseJSON[151].NODAL_OFFICER_NUMBER;
    synergyhr2=responseJSON[151].BEDS_WITH_OXYGEN_AVAILABLE;
    synergyhr3=responseJSON[151].ICU_BEDS_AVAILABLE;
    synergyhr4=synergyhr1.slice(0,11);
    synergyhr5=synergyhr1.slice(12,24);
}