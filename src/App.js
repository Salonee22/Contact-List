import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (<PersonList></PersonList>)
const PersonList = () => {
  const People=[
    {
      img:10,
      name:"Name..- Salonee",
      job:"Job..- Software Engineer"
    },
    {
      img:2,
      name:"Name..- Srestha",
      job:"Job..- Developer"
    },
    {
      img:3,
      name:"Name..- Alipsa",
      job:"Job..- Developer"
    },
    {
      img:4,
      name:"Name..- Rupashree",
      job:"Job..- Software Engineer"
    },
    {
      img:10,
      name:"Name..- Sadhana",
      job:"Job..- Developer"
    }

  ];
  return(<section>
    <Person Person={People[0]}>
    <h5>Job Location..- LectureNotes<br></br>Patia,Bbsr</h5>
    </Person>

    <Person Person={People[1]}>
    <h5>Job Location..- Infosys<br></br>Patia,Bbsr</h5>
    </Person>

    <Person Person={People[2]}>
    <h5>Job Location..- Wipro<br></br>Patia,Bbsr</h5>
    </Person> 

    <Person Person={People[3]}>
    <h5>Job Location..- T.C.S<br></br>Patia,Bbsr</h5>
    </Person>

    <Person Person={People[4]}>
    <h5>Job Location..- Capgimini<br></br>Patia,Bbsr</h5>
    </Person>

  </section>)
}

const Person = (props) => {
const{img,name,job}=props.Person;
const {children}=props;
const url=`https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return(
    <div className="Person"><img src = {url} alt=""/> 
    <div>
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}

    </div>
    </div>
  )
}

export default App;
