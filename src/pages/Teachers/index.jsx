import React, { useState, useEffect } from 'react';
import TeacherService from '../../services/TeacherService';
import { Link } from 'react-router-dom'

const Teachers = () => {
    const [teachers, setTeachers] = useState([{ id: 1, firstName: 'Jean', lastName: 'Lou', email: 'test@test.com' }])

    useEffect(() => {
         setTeachers(
             TeacherService.getTeachers(setTeachers)
         )
    }, [])

    return (
        <div>
            <h1 className="text-center"> Teachers List</h1>
            <table className="table table-striped">
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
                        teachers ?
                            teachers.map(
                                teacher =>
                                    <tr key={teacher.id}>
                                        <td>
                                            <Link to={`/teachers/${teacher.id}`}>
                                                {teacher.id}
                                            </Link>
                                        </td>
                                        <td> {teacher.firstName}</td>
                                        <td> {teacher.lastName}</td>
                                        <td> {teacher.email}</td>
                                    </tr>
                            ) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Teachers