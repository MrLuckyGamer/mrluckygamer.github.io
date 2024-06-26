"use strict";

class Episode {
  constructor({ type, title, note }) {
    this.type = type;
    this.title = title;
    this.note = note;
  }

  get html() {
    return `<cite>${this.title}</cite>${this.note ? " " + this.note : ""}`;
  }
}

class Inquisitor {
  constructor({ name, img, img_src, img_w, img_pos, lightsaber_img, species, gender, died, appearances, note }) {
    this.name = name;
    this.img = img;
    this.img_src = img_src;
    this.img_w = img_w;
    this.img_pos = img_pos;
    this.lightsaber_img = lightsaber_img;
    this.species = species;
    this.gender = gender;
    this.died = died;
    this.appearances = appearances;
    this.note = note;
  }

  get DOM() {
    let img_css = `width:${this.img_w}px;`;
    ["top", "left", "right", "bottom"].forEach(pos => {
      if (this.img_pos[pos]) img_css += ` ${pos}:${this.img_pos[pos]}px;`;
    });
    if (this.img_pos["z-index"]) img_css += ` z-index:${this.img_pos["z-index"]};`;
    const img_html = this.img ? `<img src="./img/${this.img}" style="${img_css}">` : "";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="inq_name">${this.name}${this.note ? `<div>${this.note}</div>` : ""}</td>
      <td class="inq_img">${img_html}</td>
      <td class="inq_saber">${this.lightsaber_img ? `<img src="./img/${this.lightsaber_img}">` : ""}</td>
      <td class="inq_species">${this.species}</td>
      <td class="inq_gender">${this.gender}</td>
      <td class="inq_died">${this.died}</td>
      <td class="inq_appearances">
        <ul>
          ${this.appearances.map(episode => `<li>${episode.html}</li>`).join("")}
        </ul>
      </td>
    `;
    return tr;
  }
}

// Inquisitor data

// Canon Inquisitors
const inquisitors = [
    new Inquisitor({
      name: "The Grand Inquisitor",
      img: "1st.png",
      img_src: "https://advancedgraphics.com/grand-inquisitor-lifesize-cardboard-cutout-standee-3924/",
      img_w: 125,
      img_pos: { top: 10, left: -25 },
      lightsaber_img: "1st_l.png",
      species: "Pau'an",
      gender: "Male",
      died: "4 BBY, Sovereign, Mustafar system",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017)" }),
        new Episode({ type: "animated-series", title: "Star Wars: Tales of the Empire" }),
        new Episode({ type: "live-action", title: "Star Wars: Obi-Wan Kenobi" }),
        new Episode({ type: "animated-series", title: "Star Wars: Rebels" }),
      ]
    }),
    new Inquisitor({
      name: "2nd Sister<div>(Trilla Suduri)</div>",
      img: "2nd.png",
      img_w: 120,
      img_pos: { top: 25, left: -10 },
      lightsaber_img: "2nd_l.png",
      species: "Human",
      gender: "Female",
      died: "14 BBY, Fortress Inquisitorius, Nur",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017) Vol.4 — Fortress Vader" }),
        new Episode({ type: "game", title: "Star Wars Jedi: Fallen Order" }),
      ]
    }),
    new Inquisitor({
      name: "3rd Sister<div>(Reva Sevander)</div>",
      img: "3rd.png",
      img_src: "https://advancedgraphics.com/reva-third-sister-lifesize-cardboard-cutout-standee-3927/",
      img_w: 85,
      img_pos: { top: 20, left: 10 },
      lightsaber_img: "3rd_l.png",
      species: "Human",
      gender: "Female",
      died: "",
      appearances: [
        new Episode({ type: "live-action", title: "Star Wars: Obi-Wan Kenobi" }),
      ]
    }),
    new Inquisitor({
      name: "3rd Brother?",
      img: "",
      img_w: undefined,
      img_pos: {},
      lightsaber_img: "",
      species: "",
      gender: "Male",
      died: "",
      appearances: []
    }),
    new Inquisitor({
      name: "4th Sister<div>(Lyn Rakish)</div>",
      img: "4th.png",
      img_w: 150,
      img_pos: { top: 15, left: -50 },
      lightsaber_img: "4th_l.png",
      species: "?",
      gender: "Female",
      died: undefined,
      appearances: [
        new Episode({ type: "animated-series", title: "Star Wars: Tales of the Empire" }),
        new Episode({ type: "live-action", title: "Star Wars: Obi-Wan Kenobi" }),
      ]
    }),
    new Inquisitor({
      name: "5th Brother",
      img: "5th.png",
      img_src: "https://advancedgraphics.com/fith-brother-lifesize-cardboard-cutout-standee-3928/",
      img_w: 100,
      img_pos: { top: 5 },
      lightsaber_img: "5th_l.png",
      species: "?",
      gender: "Male",
      died: "3 BBY, Malachor",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017)" }),
        new Episode({ type: "live-action", title: "Star Wars: Obi-Wan Kenobi" }),
        new Episode({ type: "animated-series", title: "Star Wars: Rebels" }),
      ]
    }),
    new Inquisitor({
      name: "6th Brother<div>(Bil Valen)</div>",
      img: "6th.png",
      img_w: 80,
      img_pos: {},
      lightsaber_img: "6th_l.png",
      species: "?",
      gender: "Male",
      died: "18 BBY, Raada",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017)" }),
        new Episode({ type: "novel", title: "Star Wars: Ahsoka" }),
      ]
    }),
    new Inquisitor({
      name: "7th Sister",
      img: "7th.png",
      img_w: 120,
      img_pos: { bottom: -20, left: -20 },
      lightsaber_img: "7th_l.png",
      species: "Mirialan",
      gender: "Female",
      died: "3 BBY, Malachor",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017)" }),
        new Episode({ type: "animated-series", title: "Star Wars: Rebels" }),
      ]
    }),
    new Inquisitor({
      name: "8th Brother",
      img: "8th.png",
      img_w: 80,
      img_pos: { bottom: -10, left: -10 },
      lightsaber_img: "8th_l.png",
      species: "Terrelian Jango Jumper",
      gender: "Male",
      died: "3 BBY, Malachor",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017)" }),
        new Episode({ type: "animated-series", title: "Star Wars: Rebels" }),
      ]
    }),
    new Inquisitor({
      name: "9th Sister<div>(Masana Tide)</div>",
      img: "js_9th.png",
      img_w: 200,
      img_pos: { bottom: -10, right: -40, "z-index": 2000 },
      lightsaber_img: "9th_l2.png",
      species: "Dowutin",
      gender: "Female",
      died: "9 BBY, Coruscant",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017)" }),
        new Episode({ type: "game", title: "Star Wars Jedi: Fallen Order" }),
        new Episode({ type: "game", title: "Star Wars Jedi: Survivor" }),
      ]
    }),
    new Inquisitor({
      name: "10th Brother<div>(Prosset Dibs)</div>",
      img: "10th.png",
      img_w: 95,
      img_pos: { bottom: 22, right: -15 },
      lightsaber_img: "10th_l.png",
      species: "Miraluka",
      gender: "Male",
      died: "18 BBY, Mon Cala",
      appearances: [
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017) Vol.3 — The Burning Seas" }),
      ]
    }),
    new Inquisitor({
      name: "13th Sister<div>(Iskat Akaris)</div>",
      img: "uf.png",
      img_w: 85,
      img_pos: { bottom: 35, right: 0, "z-index": 20000 },
      lightsaber_img: "uf_l.png",
      species: "Pkorian",
      gender: "Female",
      died: "Coruscant, before 14 BBY",
      appearances: [
        new Episode({ type: "novel", title: "Inquisitor: Rise of the Red Blade" }),
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017) Vol.4 — Fortress Vader" }),
      ]
    }),
    new Inquisitor({
      name: "14th Brother<div>(Tualon Yaluna)</div>",
      img: "Tualon.png",
      img_w: 180,
      img_pos: { bottom: 0, left: -50, "z-index": 10000 },
      lightsaber_img: "ut_l.png",
      species: "Twi'lek",
      gender: "Male",
      died: "Coruscant, before 14 BBY",
      appearances: [
        new Episode({ type: "novel", title: "Inquisitor: Rise of the Red Blade" }),
        new Episode({ type: "comic", title: "Star Wars: Darth Vader (2017) Vol.4 — Fortress Vader" }),
      ]
    }),
    new Inquisitor({
      name: "Barriss Offee",
      img: "barriss.png",
      img_src: "https://www.youtube.com/watch?v=8SIST9t72kY",
      img_w: 130,
      img_pos: { top: 30, left: -20 },
      species: "Mirialan",
      gender: "Female",
      died: "",
      appearances: [
        new Episode({ type: "animated-series", title: "Star Wars: Tales of the Empire" }),
      ]
    }),
    new Inquisitor({
      name: "Marrok",
      img: "Marrok.png",
      img_w: 220,
      img_pos: { bottom: 0 },
      lightsaber_img: "Marrok_l.png",
      gender: "Male",
      species: "?",
      appearances: [
        new Episode({ type: "animated-series", title: "Star Wars: Tales of the Empire" }),
        new Episode({ type: "live-action", title: "Ahsoka" }),
      ]
    }),
  ];

  // Unidentified Inquisitors
  const unidentified_inquisitors = [
    new Inquisitor({
      name: "?",
      img: "ahsoka_inq.png",
      img_w: 120,
      img_pos: {},
      species: "?",
      gender: "Male",
      died: "Imperial era",
      appearances: [
        new Episode({ type: "animated-series", title: "Star Wars: Tales of the Empire" }),
        new Episode({ type: "animated-series", title: "Star Wars: Tales of the Jedi" }),
      ]
    }),
    new Inquisitor({
      name: "(Jerserra's master)",
      img: "",
      img_w: undefined,
      img_pos: {},
      lightsaber_img: "Jerserra_l.png",
      species: "?",
      gender: "Female",
      died: "Dathomir, Imperial era",
      appearances: [
        new Episode({ type: "FFG adventure book", title: "Ghosts of Dathomir", note: " (Mentioned only)" }),
      ]
    }),
    new Inquisitor({
      name: "?",
      img: "",
      img_w: undefined,
      img_pos: {},
      lightsaber_img: "",
      species: "?",
      gender: "?",
      died: undefined,
      appearances: [
        new Episode({ type: "mobile game", title: "Star Wars: Uprising", note: " (Mentioned only)" }),
      ]
    }),
  ];

  // Legends Inquisitors
  const noncanon_inquisitors = [
    new Inquisitor({
      name: "Jerec",
      note: "(Legends)",
      img: "jerec.png",
      img_w: 280,
      img_pos: { bottom: 0, left: 0 },
      lightsaber_img: "",
      species: "Miraluka",
      gender: "Male",
      died: "5 ABY, Ruusan",
      appearances: [
        new Episode({ type: "animated-series", title: "" }),
      ]
    }),
    new Inquisitor({
      name: "?",
      note: "(Non-canon)",
      img: "T0-B1_Inquisitor.png",
      img_w: 280,
      img_pos: { bottom: 20, left: -130 },
      lightsaber_img: "",
      species: "?",
      gender: "?",
      died: "Imperial Era, T0-B1's home planet",
      appearances: [
        new Episode({ type: "animated-series", title: "Star Wars: Visions T0-B1" }),
      ]
    }),
    new Inquisitor({
      name: "?",
      note: "(Non-canon)",
      img: "visions_s2_inq2.png",
      img_w: 110,
      img_pos: { bottom: 0, left: 0 },
      lightsaber_img: "visions2_l.png",
      species: "?",
      gender: "Male",
      died: "Imperial Era, Golak",
      appearances: [
        new Episode({ type: "animated-series", title: "Star Wars: Visions The Bandits of Golak" }),
      ]
    }),
  ];

  // Non Inquisitors
  const non_inquisitors = [
    new Inquisitor({
      name: "M-OC",
      note: "(Hunter droid)",
      img: "M-OC.png",
      img_w: 180,
      img_pos: { bottom: 30, left: -40 },
      lightsaber_img: "M-OC_l.png",
      species: "Hunter droid",
      gender: "N/A",
      died: "4 ABY, Death Star II (Non-canon)",
      appearances: [
        new Episode({ type: "book", title: "Droidography" }),
        new Episode({ type: "", title: "LEGO Star Wars: The Freemaker Adventures" }),
      ]
    }),
    new Inquisitor({
      name: "Naare",
      note: "(Agent/Non-canon)",
      img: "Naare.png",
      img_w: 150,
      img_pos: { bottom: 30, left: -10 },
      lightsaber_img: "",
      species: "?",
      gender: "Female",
      died: undefined,
      appearances: [
        new Episode({ type: "", title: "LEGO Star Wars: The Freemaker Adventures" }),
      ]
    }),
    new Inquisitor({
      name: "4th Sister<div>(Lina Graf)</div><div>(Impersonated)</div>",
      img: "LinaGraf.png",
      img_w: 95,
      img_pos: { top: 10, left: 5 },
      lightsaber_img: "",
      species: "Human",
      gender: "Female",
      died: undefined,
      appearances: [
        new Episode({ type: "comic", title: "Star Wars Adventures: Return to Vader's Castle" }),
      ]
    }),
  ];
  

  window.addEventListener("load", () => {
    const inquisitor_tbody = document.querySelector("table#inquisitors tbody");
    const unidentified_inquisitor_tbody = document.querySelector("table#unidentified_inquisitors tbody");
    const noncanon_inquisitor_tbody = document.querySelector("table#noncanon_inquisitors tbody");
    const non_inquisitor_tbody = document.querySelector("table#non_inquisitors tbody");

    // Add inquisitors
    inquisitors.forEach(inquisitor => {
      inquisitor_tbody.append(inquisitor.DOM);
    });

    // Add unidentified inquisitors
    unidentified_inquisitors.forEach(inquisitor => {
      unidentified_inquisitor_tbody.append(inquisitor.DOM);
    });

    // Add non-canon inquisitors
    noncanon_inquisitors.forEach(inquisitor => {
      noncanon_inquisitor_tbody.append(inquisitor.DOM);
    });

    // Add non-inquisitors
    non_inquisitors.forEach(inquisitor => {
      non_inquisitor_tbody.append(inquisitor.DOM);
    });
  });
