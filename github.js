class Github{
    constructor(){
        this.client_id = '78f35acb74fbec2d8565';
        this.client_secret = 'c400662214997e5e6eeb25ebee4e706a79fef00c';
        this.repos_count = 5;
        this.respos_sort ='created:asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
   
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
    }