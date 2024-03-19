//document.getElementById("register").addEventListener('click', displayTab)
// document.getElementById("About").addEventListener('click', displayTab)
//document.getElementById("services").addEventListener('click', displayTab)

function displayTab(current){
    
    const sectionss = document.getElementsByClassName("tab-1");
    

    for(const tab of sectionss){
          tab.style.display = "none";
    }
       //document.getElementsById('game').style.display= "none";
        document.getElementById(current).style.display= "flex";

} 


let num = 0;
let countInterval;

function startGame() {
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const pauseResumeButton = document.getElementById('pauseResumeButton');
  
  startButton.disabled = true;
  stopButton.disabled = false;
  pauseResumeButton.disabled = false;

  countInterval = setInterval(updateCounter, 1000);
}

function stopGame() {
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const pauseResumeButton = document.getElementById('pauseResumeButton');
  
  startButton.disabled = false;
  stopButton.disabled = true;
  pauseResumeButton.disabled = true;

  clearInterval(countInterval);
  num = 0;
  document.getElementById('count').textContent = num;
}

function pauseResumeGame() {
  const pauseResumeButton = document.getElementById('pauseResumeButton');
  
  if (pauseResumeButton.textContent === 'Pause') {
    pauseResumeButton.textContent = 'Resume';
    clearInterval(countInterval);
  } else {
    pauseResumeButton.textContent = 'Pause';
    countInterval = setInterval(updateCounter, 1000);
  }
}

function updateCounter() {
  num++;
  document.getElementById('count').textContent = num;
}

const persons = [
    { firstName: 'Rekha', lastName: 'Korepu', email: 'rekha.korepu@everest.engineering' },
    { firstName: 'Anjani', lastName: 'Barlapati', email: 'anjani.barlapati@everest.engineering' },
    { firstName: 'Varun', lastName: 'Martha', email: 'varun.martha@everest.engineering' },
    { firstName: 'Usha', lastName: 'sri', email: 'usha.sri@evererest.engineering' },
    { firstName: 'Akhila', lastName: 'badrapu', email: 'Akhila.badrapu@everest.engineering' },
    { firstName: 'Lavanya', lastName: 'gurijala', email: 'lavanya.gurijala@everest.engineering' },
    { firstName: 'Anush', lastName: 'Korepu', email: 'Anush.korepu@everest.engineering' }
  ];

  const tableBody = document.getElementById('personsDetails');
  persons.forEach(person => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    firstNameCell.textContent = person.firstName;
    lastNameCell.textContent = person.lastName;
    emailCell.textContent = person.email;
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(emailCell);
    tableBody.appendChild(row);
  });

  function toggleNavbar(){
    var navbar= document.querySelector('.nav-items');
    navbar.classList.toggle('active');
    //document.getElementsByClassName('nav-items').style.display= "none";

  }
  
