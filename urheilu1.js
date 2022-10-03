class henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  henkiloTiedot() {
    return this.etunimi, this.sukunimi, this.kutsumanimi, this.syntymavuosi;
  }

  get henkiloTiedot() {
    return this.henkiloTiedot();
  }
}

class urheilija extends henkilo {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    link,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimi, sukunimi, kutsumanimi, syntymavuosi);
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
    this.link = link;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  urheilijaTiedot() {
    return (
      this.etunimi,
      this.sukunimi,
      this.kutsumanimi,
      this.syntymavuosi,
      this.link,
      this.omapaino,
      this.laji,
      this.saavutukset
    );
  }
  get urheilijanTiedot() {
    return this.urheilijaTiedot();
  }
}

let urheilija1 = new urheilija(
  "Roni",
  "Testo",
  "Testosteroni",
  "10.10.1978",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Markus_R%C3%BChl.jpg/200px-Markus_R%C3%BChl.jpg",
  "120kg",
  "Kehorakentaja",
  "Mr. Olympia"
);

console.log(urheilija1);
