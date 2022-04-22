const fs = require('fs')
const path= require('path')
const Octokit = require('octokit').Octokit

const fetchGhRepos = async (repos) => {
  const ghToken = process.env["GITHUB_TOKEN"]

  let repoInfoArray = new Array()
  for (let idx = 0; idx < repos.length; idx++) {
    const repoFullName = repos[idx];
    const [owner, repo] = repoFullName.split("/")
    const octokit = new Octokit({ auth: ghToken });
    const response = await octokit.rest.repos.get({ owner, repo });
    repoInfoArray.push(response.data);
  }
  return repoInfoArray
}

module.exports = (options, ctx) => {
  return {
    name: 'gh-repos-snapshot',
    async ready() {
      const repos = await fetchGhRepos(options.repos)
      const reposJSONFile = path.resolve(options.dest || ctx.outDir, "gh-repos-snapshot.json")
      fs.writeFileSync(reposJSONFile, JSON.stringify(repos))
    }
  }
}
