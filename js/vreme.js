function updateTime(){


    var datum = new Date(); 
                var dan=datum.getDay();
                switch (dan){
                    case 0:
                        dan = "Nedelja, "
                        break;
                    case 1:
                        dan = "Ponedeljak, "
                        break;
                    case 2:
                        dan = "Utorak, "
                        break;
                    case 3:
                        dan = "Sreda, "
                        break;
                    case 4:
                        dan = "Četvrtak, "
                        break;
                    case 5:
                        dan = "Petak, "
                        break;
                    case 6:
                        dan = "Subota, "
                        break;
                    }
                
                var sati=datum.getHours();
                sati=dodajNulu(sati);
                var minuti=datum.getMinutes();
                minuti=dodajNulu(minuti);
                var sadasnjeVreme=dan+sati+":"+minuti;
                document.getElementById("vreme").innerText = sadasnjeVreme;
                let timer=setTimeout(updateTime,1000);
            }
                function dodajNulu(vreme){
                    return vreme<10?"0" + vreme : vreme;
                }
                updateTime();