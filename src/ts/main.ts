/*
1.Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
*/

let jumpings: number[] = [5,6,7,8,4,3]
let totalNumber = jumpings.reduce(function (prevValue, currValue){
 return prevValue + currValue;   
});
console.log(totalNumber);


/*
2.I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
*/

class Student {
    constructor(public name: string, public handedInOnTime: boolean, public passed: boolean) {}
  }

let student = [
  {     name: "Sebastian",
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
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

  class Temperature {
    constructor(public city: string, public when: Date, public dayTempurature: number) {}
  }
  
  function averageWeeklyTemperature(tempuratures: Temperature[]) {
    let r = 0;
  
    for (let i = 0; i < tempuratures.length; i++) {
      if (tempuratures[i].city === "Stockholm") {
        if (tempuratures[i].when.getTime() > Date.now() - 604800000) {
          r += tempuratures[i].dayTempurature;
        }
      }
    }
  
    return r / 7;
  };

  /*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.*/


  function showProduct(
    name: string,
    price: number,
    amount: number,
    description: string,
    image: string,
    parent: HTMLElement
  ) {
    const container = document.createElement("div");
    const title = document.createElement("h4");
    const pris = document.createElement("strong");
    const imageTag = document.createElement("img");
  
    title.textContent = name;
    pris.textContent = price.toString();
    imageTag.src = image;
    imageTag.alt = name;
  
    container.appendChild(title);
    container.appendChild(imageTag);
    container.appendChild(pris);
    parent.appendChild(container);
  }

  /*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!*/
  function presentStudents(students: Student[]) {
    function createCheckbox(checked: boolean): HTMLInputElement {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = checked;
      return checkbox;
    }
  
    for (const student of students) {
      const container = document.createElement("div");
      const checkbox = createCheckbox(student.handedInOnTime);
  
      container.appendChild(checkbox);
  
      const listOfStudents = document.querySelector("ul#passedstudents");
      if (listOfStudents) {
        listOfStudents.appendChild(container);
      } else {
        const listOfStudents = document.querySelector("ul#failedstudents");
        if (listOfStudents) {
          listOfStudents.appendChild(container);
        }
      }
    }
  }

  /*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

  function concatenateStrings(strings: string[]): string {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
      result += strings[i] + " ";
    }
    return result.trim();
  }
  
  let strings = ["Lorem", "Ipsum", "dolor", "sit", "amet"];
  let result = concatenateStrings(strings);
  
 /*
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
  Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
  fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
  lösning som är hållbar och skalar bättre. 
*/
function createUser(
name: string,
birthday: Date,
email: string,
password: string
) {
// Validation

let ageDiff = Date.now() - birthday.getTime();
let ageDate = new Date(ageDiff);
let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

console.log(userAge);

if (userAge <= 20) {
  // Logik för att skapa en användare
} else {
  return "Du är under 20 år";
}
};
