import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JS' }
    ] , 
    current:''
  };

  //Update
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
    }
//add
addCourse = (e) => {
  e.preventDefault();
  let current = this.state.current;
  let courses = this.state.courses;
  courses.push({name: current})
  this.setState({
    courses,
    current: ''
  })
}
  //delete
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses
    })
  }
  // edit 
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    const { courses } = this.state;
    const list = courses.map((course, index) => {
      return <List info={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
      
    })

    return (
      <section className="App">
        <h2>Add Item</h2>
        <Form current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>     
            <ul>{list}</ul>
      </section>
    );
  }
}

export default App;