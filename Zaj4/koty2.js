var kotki2 = {
  a: { imie: "Rufus", poziom_slodkosci: 5, obrazy: [{ url: "https://i.ytimg.com/vi/FHH6hIc2GyE/0.jpg" , rozmiar: "M"  }]},
  b: { imie: "Maciuś", poziom_slodkosci: 4, obrazy: [{ url: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782" , rozmiar: "M"  }]},
  c: { imie: "Ruzia", poziom_slodkosci: 8, obrazy: [{ url: "https://i.pinimg.com/originals/5b/73/82/5b7382c685073fcebdac0e522af3883a.jpg" , rozmiar: "L"  }]},
  d: { imie: "Sebastian", poziom_slodkosci: 9, obrazy: [{ url: "https://vallaura.files.wordpress.com/2015/12/sweet-cat-prayering-image.jpg" , rozmiar: "L"  }]},
  e: { imie: "Kajetan", poziom_slodkosci: 10, obrazy: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomCRsvcTur_mvHS_aQbnITpo_4O4W_0kFpkNsRj_HuIEJFcLu" , rozmiar: "M"  }]},
  f: { imie: "Isia", poziom_slodkosci: 9, obrazy: [{ url: "http://wlpapers.com/images/closeup-sweet-cat-photo-1.jpg" , rozmiar: "M"  }]}
}

function wypisz2(n) {

  wynik=""
  for (var i in kotki2) {
    wynik+=(i.imie + " - " + i.poziom_slodkosci + "\n" + i.obrazy[0].url +"\n\n")
  }
  console.log(wynik)
}
