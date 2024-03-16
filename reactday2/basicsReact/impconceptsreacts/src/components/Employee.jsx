import React from 'react'
//another way of condition render
function checkWorkExpe(workExperience){
    if(workExperience>5){
        return "red"    }
    else{
        return "blue"
    }
}
function Employee({employelist}) {
  return (
    <div>
<ul>
 {/* <li style={{color:checkWorkExpe(workExperience),listStyle:"none"}}>{name} : {workExperience}</li> */}
 {/* perfect condition rendering */}
        {employelist.map(({name,workExperience})=>
        <li style={{color:workExperience>5?'red':'blue', border:workExperience>5 ? '2px solid green':'none'}}>{name}:{workExperience}</li>
        )}
        </ul>
    </div>
  )
}

export default Employee