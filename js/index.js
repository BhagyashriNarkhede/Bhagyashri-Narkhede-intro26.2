const body = document.body;

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();   

const footerElement = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = "© Bhagyashri Narkhede " + thisYear;

footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsSection = document.getElementById("skills");

console.log(skillsSection);

const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++)
{
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}