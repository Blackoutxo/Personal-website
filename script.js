// Scrolling
window.addEventListener('wheel', (e) => {
    e.preventDefault();

    window.scrollTo({
        left: e.deltaY,
        behavior: "smooth"
    });

}, {passive : false});

// Get Repo count
async function getRepo() {
    try {
        const response = await fetch(`https://api.github.com/users/Blackoutxo/repos`);
        const repos = await response.json();
        
        repoCount = 0;
        repos.forEach(repo => {
            const status = repo.fork ? "true" : "false";

            if(status) repoCount++;
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Functions
getRepo();