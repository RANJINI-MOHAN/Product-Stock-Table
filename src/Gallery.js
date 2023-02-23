import React from "react";
import { people }  from "./jsondata";

const person = [
    {name:'Ranjini', ind:false},
    {name:'Bharath', ind:true},
    {name:'Sharva', ind:true}
];

function Photo() {
    return(
        <div>
            <img scr="./photos/photo1.jpg" alt="Amazing scientists">
            </img>
        </div>
    )
}

function ConditionalComponent({name, flag}) {
    return(
        <li>
            {name} {flag ? 'RANJ' : 'MOHAN'}
        </li>     
    )
}

function ListOpen({ person }) {
    let rows = [];

    person.forEach((per) => {
        if(per.ind === true)
        {
            rows.push(
                <ul key={per.name}>
                    
                    <ConditionalComponent name={per.name} flag={per.ind} key={per.name}>
                     </ConditionalComponent>
                    
                    
                </ul>
                
            )
        }
        else {
            rows.push(
                <ol key={per.name}>
                   
                    <ConditionalComponent name={per.name} flag={per.ind} key={per.name}>
            </ConditionalComponent>
                   
                </ol>
            )
        }

    })
    return(
        <React.Fragment>
        <h1>List of Conditional Operator</h1>
        <ul>
            {rows}
            
        </ul>
        </React.Fragment>   
    );
}

function getImageUrl(pep) {
    return (
      'https://i.imgur.com/' +
      pep.imageId +
      's.jpg'
    );
  }

function ReadingList() {

    const ListItems = people.map(pep => 
        <ul key={pep.id}>
            <img src={getImageUrl(pep)}
                 alt={pep.name}></img>
                 <p>
                    <b>{pep.name}</b>
                    {pep.profession}
                    {pep.accomplishment}
                 </p>
        </ul>
    );
       return(
        <div>
            <h1>Rendering List Example: Great Scientists</h1>
            <ul>{ListItems}</ul>
        </div>

       );
}

let guest = 0;

function Cup() {
    // Bad: changing a preexisting variable!
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
  }

  // example for Pure Function:

  function Cupp({guest}) {

    return(
        <h1>
            Tea Cup For Guests#{guest}
        </h1>
    )
    
  }

export default function Profile() {
    return(
        <section>
            <Photo></Photo>
            <Photo></Photo>
            <ListOpen person={person}/>
            <ReadingList people={people}/>
            <Cup></Cup>
            <Cupp guest={5}></Cupp>
        </section>
    )
}