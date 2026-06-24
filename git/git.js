async function getGitInfo() {
    try {
        
        const response = await fetch('https://api.github.com/users/Blackoutxo/repos');
        const infos = await response.json();

        displayRepo(infos);
    }  catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

function displayRepo(repos) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    repos.forEach(repo => {
        container.innerHTML += `
        
        <div class="repo"> 
           <div class="repo-title">${repo.name}</div>
        </div>
        `;
    });
}

getGitInfo();