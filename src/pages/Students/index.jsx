import React, { useState, useEffect } from 'react';
import StudentService from '../../services/StudentService';
import { Link } from 'react-router-dom'

const Students = () => {
    const [students, setStudents] = useState([{ id: 1, firstName: 'Jean', lastName: 'Lou', email: 'test@test.com' }])

    useEffect(() => {
         setStudents(
             StudentService.getStudents(setStudents)
         )
    }, [])

    return (
        <div>
            <h1 className="text-center"> Students List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td> Student Id</td>
                        <td> Student First Name</td>
                        <td> Student Last Name</td>
                        <td> Student Email Id</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        students ?
                            students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>
                                            <Link to={`/students/${student.id}`}>
                                                {student.id}
                                            </Link>
                                        </td>
                                        <td> {student.firstName}</td>
                                        <td> {student.lastName}</td>
                                        <td> {student.email}</td>
                                    </tr>
                            ) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Students