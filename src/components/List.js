import React, {Component} from "react";


class List extends Component{

    state = {
        isEdit : false
      }


    renderCourse = () => {
        return (
          <li>
              <span>{this.props.info.name}</span>
              <button onClick={() => {this.toggleState()}}>Edit</button>
            <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete</button>
          </li>
        )
      } 

        // toggleState
  toggleState = () => {
    let {isEdit} = this.state;
    this.setState({
      isEdit: !isEdit
    })
  }
  // updateItem
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index , this.input.value);
    this.toggleState();
  }
 // render Update Form
 renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.info.name}/>
        <button>Update</button>
      </form>
    )
  }

    render() {
        let {isEdit} = this.state;
        return(
            <React.Fragment>
            { isEdit ? this.renderUpdateForm() : this.renderCourse()  }
           </React.Fragment>
        );
    }
} 
export default List;