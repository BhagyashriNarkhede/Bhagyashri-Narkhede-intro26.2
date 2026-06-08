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
const skillsSection = document.getElementById("Skills");

console.log(skillsSection);

const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++)
{
   const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit",function(event)
{
event.preventDefault();

const userName = event.target.usersName.value;
const userEmail = event.target.usersEmail.value;
const userMessage = event.target.usersMessage.value;

console.log(userName, userEmail, userMessage);

/**Select the messages section */
const messageSection = document.querySelector("#messages");

/**select ul inside message section */
const messageList = messageSection.querySelector("ul");

/**create li element */
const newMessage = document.createElement("li");
 
newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span> says: ${userMessage}</span>`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function()
{
    const entry = removeButton.parentNode;
    entry.remove();
});

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);

messageForm.reset();

});

fetch("https://api.github.com/users/BhagyashriNarkhede/repos")
.then(function(response)
   {
    return response.json();
    })
    .then(function(repositories)
    {
        console.log(repositories);
 
        const projectSection = document.getElementById("Projects");
       
        const projectList = projectSection.querySelector("ul");

        for(let i = 0; i < repositories.length; i++)
        {
            const project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch(function(error)
    {
        console.log("Error fetching repositories: ", error);
        
        const projectSection = document.getElementById("Projects");
    
        const projectList = projectSection.querySelector("ul");
     
        projectList.innerHTML = "<li>Failed to load repositories.</li>";
    });