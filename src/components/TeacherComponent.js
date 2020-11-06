import React from 'react';
import TeacherService from '../services/TeacherService';

class TeacherComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            Teachers:[]
        }
    }

    componentDidMount(){
        TeacherService.getTeachers().then((response) => {
            this.setState({ Teachers: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Teachers List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Teacher Id</td>
                            <td> Teacher First Name</td>
                            <td> Teacher Last Name</td>
                            <td> Teacher Email Id</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.Teachers.map(
                                teacher => 
                                <tr key = {teacher.id}>
                                     <td> {teacher.id}</td>   
                                     <td> {teacher.firstName}</td>   
                                     <td> {teacher.lastName}</td>   
                                     <td> {teacher.email}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default TeacherComponent