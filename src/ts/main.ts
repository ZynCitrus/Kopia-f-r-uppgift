/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
*/

/*Jag kan inte med pilfunktioner, jag skyr dem som pesten, så därför får du en vanlig
Skapade en array för att testa numren.
Började med att skapa en variabel för att enkelt kunna plocka ut värdena ut funktionen.
Skapar en function som plockar fram de olika värdena.
Plockar ut värdena och plusar ihop dem.
Consoleloggar dem.*/

let jumpings: number[] = [5,6,7,8,4,3]
let totalNumber = jumpings.reduce(function (prevValue, currValue){
 return prevValue + currValue;   
});
console.log(totalNumber);

class Student {
    constructor(public name: string, public handedInOnTime: boolean, public passed: boolean) {}
  }


  let student = [
    {
        name: "Sebastian",
        handedInOnTime: true,
        passed: true,
    }
  ]

  function getStudentStatus(student: Student) {
    if (student.name === "Sebastian" && student.handedInOnTime === true && student.passed === true) {
        return "VG";
    }
    else {
        return "IG";
    }
  }
  console.log(getStudentStatus(student[0]))

  /*
  function getStudentStatus(student: Student): string {
    student.passed =
      student.name == "Sebastian"
        ? student.handedInOnTime
          ? true
          : false
        : false;
  
    if (student.passed) {
      return "VG";
    } else {
      return "IG";
    }
  }*/
  



/*
  const body = document.getElementById('body')

  function showProduct(
    name: string,
    price: number,
    image: string,
    parent: HTMLElement
  ) {
    let container = document.createElement("div");
    let title = document.createElement("h4");
    let pris = document.createElement("strong");
    let imageTag = document.createElement("img");

    title.innerHTML = name;
    pris.innerHTML = price.toString();
    imageTag.src = image;
  
    container.appendChild(title);
    container.appendChild(imageTag);
    container.appendChild(pris);
    parent.appendChild(container);
  }

  showProduct("Hörnsoffa", 6400, "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", body);*/