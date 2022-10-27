import React from 'react'

function ReposList({repos}) {
  return (
    <div>
        {repos.map((repo) =>(
            <h3>{repo.name}</h3>
        ))}
    </div>
  )
}

export default ReposList
