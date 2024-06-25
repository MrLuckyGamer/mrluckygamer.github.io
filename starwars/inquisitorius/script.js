"use strict";
const user_lang = ((
    (window.navigator.languages && window.navigator.languages[0])
    || window.navigator.language
    || window.navigator.userLanguage
    || window.navigator.browserLanguage
).toLowerCase().split("-")[0])=="en"?"en":"en";

class Episode{
    constructor({type,title,note}){
        this.type=type;
        this.title=title;
        this.note=note;
    }
    get html(){
        const type_multiLang = (()=>{
            switch(this.type){
                case "comic":
                return {en:"comic"};

                case "live-action":
                return {en:"live-action"};

                case "animated-series":
                return {en:"animated-series"};

                case "game":
                return {en:"game"};

                case "novel":
                return {en:"novel"};

                default:
                return plain_text(this.type || "");
            }
        })();
        return `<cite>${plain_text(this.title)}</cite>` + (this.note?" "+plain_text(this.note):"");
    }
}

class Inquisitor{
    constructor({name,img,img_src,img_w,img_pos,lightsaber_img,species,died,appearances,note}){
        this.name = name;
        this.img=img;
        this.img_w = img_w
        this.img_pos=img_pos;
        this.lightsaber_img=lightsaber_img;
        this.species=species;
        this.died=died;
        this.appearances=appearances;
        this.note = note;
        this.img_src = img_src;
    }
    get DOM(){
        let img_css = `width:${this.img_w}px;`;
        ["top","left","right","bottom"].forEach(pos=>{
            if(this.img_pos[pos]) img_css += ` ${pos}:${this.img_pos[pos]}px;`;
        })
        if(this.img_pos["z-index"]) img_css += ` z-index:${this.img_pos["z-index"]};`;
        const img_html = (this.img=="?")?"?":(this.img?`<img src="./img/${this.img}" style="${img_css}">`:"");

        this.tr = document.createElement("tr");
        this.tr.innerHTML = `
        <td class="inq_name">${plain_text(this.name)+(this.note?("<div>"+plain_text(this.note)+"</div>"):"")}</td>
        <td class="inq_img">${img_html}</td>
        <td class="inq_saber">${this.lightsaber_img?'<img src="./img/'+this.lightsaber_img+'">':""}</td>
        <td class="inq_species">${plain_text(this.species)}</td>
        <td></td>
        <td class="inq_died"><span class="spoiler">${plain_text(this.died)}</span></td>
        <td class="inq_appearances">
            <ul>
                ${this.appearances.map(episode=>("<li>"+episode.html+"</li>")).join("")}
            </ul>
        </td>
        `
        return this.tr;
    }

    set margin(margin){
        if(!this.tr) return;
        this.tr.style["margin-left"]=margin+"px";
    }
    get margin(){
        if(!this.tr) return undefined;
        return this.tr.style["margin-left"];
    }
}

function plain_text(multilang_text){
    if(!multilang_text) return "";
    return (multilang_text[user_lang]
        || multilang_text["en"]
        || multilang_text);//.replace(/ /g,`&nbsp;`);
}

const numbered_inquisitors = [
    new Inquisitor({
        name:{en:"The Grand Inquisitor"},
        img:"1st.png",
        img_src:"https://advancedgraphics.com/grand-inquisitor-lifesize-cardboard-cutout-standee-3924/",
        img_w:125,
        img_pos:{top:10,left:-25},
        lightsaber_img:"1st_l.png",
        species:{en:"Pau'an"},
        died:{
            en:"4 BBY, Sovereign, Mustafar system"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017)"}
            }),
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Tales of the Empire"}
            }),
            new Episode({
                type:"live-action",
                title:{en:"Star Wars: Obi-Wan Kenobi"}
            }),
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Rebels"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`2nd Sister<div class="spoiler">(Trilla Suduri)</div>`},
        img:"2nd.png",
        img_w:120,
        img_pos:{top:25,left:-10},
        lightsaber_img:"2nd_l.png",
        species:{en:"Human"},
        died:{
            en:"14 BBY, Fortress Inquisitorius, Nur"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017) Vol.4 — Fortress Vader"}
            }),
            new Episode({
                type:"game",
                title:{en:"Star Wars Jedi: Fallen Order"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`3rd Sister<div>Reva Sevander</div>`},
        img:"3rd.png",
        img_src:"https://advancedgraphics.com/reva-third-sister-lifesize-cardboard-cutout-standee-3927/",
        img_w:85,
        img_pos:{top:20,left:10},
        lightsaber_img:"3rd_l.png",
        species:{en:"Human"},
        died:"",
        appearances:[
            new Episode({
                type:"live-action",
                title:{en:"Star Wars: Obi-Wan Kenobi"}
            }),
        ]
    }),
    new Inquisitor({
        name:`3rd Brother?`,
        img:"?",
        img_w:undefined,
        img_pos:{},
        lightsaber_img:"",
        species:"?",
        died:"",
        appearances:[]
    }),
    new Inquisitor({
        name:`4th Sister<div>Lyn</div>`,
        img:"4th.png",
        img_w:150,
        img_pos:{top:15,left:-50},
        lightsaber_img:"4th_l.png",
        species:"?",
        died:undefined,
        appearances:[
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Tales of the Empire"}
            }),
            new Episode({
                type:"live-action",
                title:{en:"Star Wars: Obi-Wan Kenobi"}
            }),
        ]
    }),
    new Inquisitor({
        name:`5th Brother`,
        img:"5th.png",
        img_src:"https://advancedgraphics.com/fith-brother-lifesize-cardboard-cutout-standee-3928/",
        img_w:100,
        img_pos:{top:5},
        lightsaber_img:"5th_l.png",
        species:"?",
        died:{
            en:"3 BBY, Malachor"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017)"}
            }),
            new Episode({
                type:"live-action",
                title:{en:"Star Wars: Obi-Wan Kenobi"}
            }),
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Rebels"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`6th Brother<div class="spoiler">(Bil Valen)</div>`},
        img:"6th.png",
        img_w:80,
        img_pos:{},
        lightsaber_img:"6th_l.png",
        species:"?",
        died:{
            en:"18 BBY, Raada"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017)"}
            }),
            new Episode({
                type:"novel",
                title:{en:"Star Wars: Ahsoka"}
            }),
        ]
    }),
    new Inquisitor({
        name:`7th Sister`,
        img:"7th.png",
        img_w:120,
        img_pos:{bottom:-20,left:-20},
        lightsaber_img:"7th_l.png",
        species:{en:"Mirialan"},
        died:{
            en:"3 BBY, Malachor"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017)"}
            }),
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Rebels"}
            }),
        ]
    }),
    new Inquisitor({
        name:`8th Brother`,
        img:"8th.png",
        img_w:80,
        img_pos:{bottom:-10,left:-10},
        lightsaber_img:"8th_l.png",
        species:{en:"Terrelian Jango Jumper"},
        died:{
            en:"3 BBY, Malachor"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017)"}
            }),
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Rebels"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`9th Sister<div class="spoiler">(Masana Tide)</div>`},
        img:"js_9th.png",
        img_w:200,
        img_pos:{bottom:-10,right:-40,"z-index":2000},
        lightsaber_img:"9th_l2.png",
        species:{en:"Dowutin"},
        died:{
            en:"9 BBY, Coruscant"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017)"}
            }),
            new Episode({
                type:"game",
                title:{en:"Star Wars Jedi: Fallen Order"}
            }),
            new Episode({
                type:"game",
                title:{en:"Star Wars Jedi: Survivor"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`10th Brother<div class="spoiler">(Prosset Dibs)</div>`},
        img:"10th.png",
        img_w:95,
        img_pos:{bottom:22,right:-15},
        lightsaber_img:"10th_l.png",
        species:{en:"Miraluka"},
        died:{
            en:"18 BBY, Mon Cala"
        },
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017) Vol.3 — The Burning Seas"}
            }),
        ]
    }),
    new Inquisitor({
        name:`<div class="spoiler">13th Sister</div><span class="spoiler">(</span>Iskat Akaris<span class="spoiler">)</span>`,
        img:"uf.png",
        img_w:85,
        img_pos:{bottom:35,right:0,"z-index":20000},
        lightsaber_img:"uf_l.png",
        species:`<div class="fakes">?</div><div class="spoiler">Pkorian<div>`,
        died:{en:"Coruscant, before 14 BBY"},
        appearances:[
            new Episode({
                type:"novel",
                title:`Inquisitor: Rise of the Red Blade`
            }),
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017) Vol.4 — Fortress Vader"}
            }),
        ]
    }),
    new Inquisitor({
        name:`Tualon Yaluna`,
        img:"Tualon.png",
        img_w:180,
        img_pos:{bottom:0,left:-50,"z-index":10000},
        lightsaber_img:"ut_l.png",
        species:{en:"Twi'lek"},
        died:{en:"Coruscant, before 14 BBY"},
        appearances:[
            new Episode({
                type:"novel",
                title:`Inquisitor: Rise of the Red Blade`
            }),
            new Episode({
                type:"comic",
                title:{en:"Star Wars: Darth Vader (2017) Vol.4 — Fortress Vader"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`Barriss Offee`},
        img:"barriss.png",
        img_src:"https://www.youtube.com/watch?v=8SIST9t72kY",
        img_w:130,
        img_pos:{top:30, left:-20},
        species:{en:"Mirialan"},
        died:"",
        appearances:[
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Tales of the Empire"}
            }),
        ]
    }),
    new Inquisitor({
        name:`Marrok`,
        img:"Marrok.png",
        img_w:220,
        img_pos:{bottom:0},
        lightsaber_img:"Marrok_l.png",
        species:"?",
        appearances:[
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Tales of the Empire"}
            }),
            new Episode({
                type:"live-action",
                title:{en:`Ahsoka`},
            }),
        ]
    }),
];
const unidentified_inquisitors = [
    new Inquisitor({
        name:`?`,
        img:"ahsoka_inq.png",
        img_w:120,
        img_pos:{},
        species:`?`,
        died:{en:"Imperial era"},
        appearances:[
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Tales of the Empire"}
            }),
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Tales of the Jedi"}
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`(Jerserra's master)`},
        img:"?",
        img_w:undefined,
        img_pos:{},
        lightsaber_img:"Jerserra_l.png",
        species:`?`,
        died:{en:"Dathomir, Imperial era"},
        appearances:[
            new Episode({
                type:"FFG adventure book",
                title:"Ghosts of Dathomir",
                note:{en:` (Mentioned only)`},
            }),
        ]
    }),
    new Inquisitor({
        name:`?`,
        img:"?",
        img_w:undefined,
        img_pos:{},
        lightsaber_img:"",
        species:`?`,
        died:undefined,
        appearances:[
            new Episode({
                type:"mobile game",
                title:"Star Wars: Uprising",
                note:{en:" (Mentioned only)"},
            }),
        ]
    }),
];
const noncanon_inquisitors = [
    new Inquisitor({
        name:`?`,
        note:{en:`(Non-canon)`},
        img:"T0-B1_Inquisitor.png",
        img_w:280,
        img_pos:{bottom:20,left:-130},
        lightsaber_img:"",
        species:`?`,
        died:{en:`Imperial Era, T0-B1's home planet`},
        appearances:[
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Visions T0-B1"},
            }),
        ]
    }),new Inquisitor({
        name:`?`,
        note:{en:`(Non-canon)`},
        img:"visions_s2_inq2.png",
        img_w:110,
        img_pos:{bottom:0,left:0},
        lightsaber_img:"visions2_l.png",
        species:`?`,
        died:{en:`Imperial Era, Golak`},
        appearances:[
            new Episode({
                type:"animated-series",
                title:{en:"Star Wars: Visions The Bandits of Golak"},
            }),
        ]
    }),
]
const non_inquisitors = [
    new Inquisitor({
        name:`M-OC`,
        note:{en:`(Hunter droid)`},
        img:"M-OC.png",
        img_w:180,
        img_pos:{bottom:30,left:-40},
        lightsaber_img:"M-OC_l.png",
        species:{en:`Hunter droid`},
        died:{en:`4 ABY, Death Star II (Non-canon)`},
        appearances:[
            new Episode({
                type:"book",
                title:{en:"Droidography",},
            }),
            new Episode({
                type:"",
                title:{en:"LEGO Star Wars: The Freemaker Adventures"},
            }),
        ]
    }),
    new Inquisitor({
        name:{en:`Naare`},
        note:{en:`(Agent/Non-canon)`},
        img:"Naare.png",
        img_w:150,
        img_pos:{bottom:30,left:-10},
        lightsaber_img:"",
        species:"?",
        died:undefined,
        appearances:[
            new Episode({
                type:"",
                title:{en:"LEGO Star Wars: The Freemaker Adventures"},
            }),
        ]
    }),
    new Inquisitor({
        name:{
            en:`<span class="fakes">4th Sister ?</span><span class="spoiler">Lina Graf</span><div class="spoiler">(Impersonated)</div>`
        },
        img:"LinaGraf.png",
        img_w:95,
        img_pos:{top:10,left:5},
        lightsaber_img:"",
        species:"?",
        died:undefined,
        appearances:[
            new Episode({
                type:"comic",
                title:{en:"Star Wars Adventures: Return to Vader's Castle"},
            }),
        ]
    }),
];

window.addEventListener("load",()=>{
    let spoilerFlag=false;//If 0, spoilers are hidden
    document.querySelectorAll(".spoilerSwitch").forEach(switchLink=>{
        switchLink.addEventListener("click",(e)=>{
            e.preventDefault();
    
            if(!spoilerFlag){
                document.querySelectorAll(".spoiler").forEach(el=>{
                    if(el.tagName=="DIV"){
                        el.style.display="block";
                    }else{
                        el.style.display="inline";
                    }
                });
                document.querySelectorAll(".fakes").forEach(el=>el.style.display="none");
                spoilerFlag=true;
            }else{
                document.querySelectorAll(".spoiler").forEach(el=>el.style.display="none");
                document.querySelectorAll(".fakes").forEach(el=>{
                    if(el.tagName=="DIV"){
                        el.style.display="block";
                    }else{
                        el.style.display="inline";
                    }
                });
                spoilerFlag=false;
            }
        });
    });

    const inquisitor_tbody = document.querySelector("table#inquisitors tbody")
    numbered_inquisitors.forEach(inquisitor=>{
        inquisitor_tbody.append(inquisitor.DOM);
    });
    unidentified_inquisitors.forEach((inquisitor,i)=>{
        inquisitor_tbody.append(inquisitor.DOM);
        if(i==0) inquisitor.margin=5;
    });
    noncanon_inquisitors.forEach((inquisitor,i)=>{
        inquisitor_tbody.append(inquisitor.DOM);
        if(i==0) inquisitor.margin=5;
    });
    non_inquisitors.forEach((inquisitor,i)=>{
        inquisitor_tbody.append(inquisitor.DOM);
        if(i==0) inquisitor.margin=150;
    });

    if(user_lang!="en"){
        document.querySelectorAll(`[lang=en]`).forEach(el=>el.style.display="none");
        document.querySelectorAll(`[lang=${user_lang}]`).forEach(el=>el.style.display="initial");
    }
});
