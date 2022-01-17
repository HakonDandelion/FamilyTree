import React from 'react'

export default function temp() {
    return (
        <div>
            <input type="text" onChange={(event) =>{
            setSearchTerm(event.target.value)
          }} />
          {memberTree.filter((val) =>{
            if(searchTerm ==""){
              return val
            }else if(val.name. toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
              return val
            }
          }).map((val, key) =>{
            return(
              <div key={key}>
                <p>{val.name}</p>
              </div>
            )
          })}
          item.name.toUpperCase()===item.name.toLowerCase() || item.surname.toUpperCase()===item.surname.toLowerCase()
        </div>
    )
}
