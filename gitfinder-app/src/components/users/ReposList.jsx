import React from 'react'
import RepoItem from './RepoItem'

function ReposList({repos}) {
  return (
    <div>
        {repos.map((repo) =>(
            <RepoItem name={repo.name} url={repo.svn_url} language={repo.language}/>
        ))}
    </div>
  )
}

export default ReposList
