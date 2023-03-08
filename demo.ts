function monAdresse() {
    const adresse:string = "40 square de l'hotel de ville Aix-Les-Bains";
    const zipCode:number = 73100;
    const adresseComplete:string = adresse + " " + zipCode;
    console.log(adresseComplete);
  }
  
  monAdresse();
  

  function paysFavoris() {
    const mesPaysFavoris: string[] = ["France", "Japon", "Italie", "Canada", "Danemark"];
    for (let i = 0; i < mesPaysFavoris.length; i++) {
      console.log(mesPaysFavoris[i]);
    }
  }
  
  paysFavoris();