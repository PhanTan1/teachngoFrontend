import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import TeacherService from '../../services/TeacherService';
import { Link } from 'react-router-dom'
import Bubble from "../../components/Bubble"

import pic from "../../static/images/Marc.jpg"
import pic2 from "../../static/images/tan.png"

const TeachersWrapper = styled.div`
    display: flex;
    max-width: 1200px;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px auto 0;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    :hover {
        color: inherit;
        text-decoration: none;
    }
`

const Teachers = () => {
    const [teachers, setTeachers] = useState([
        { id: 1, firstName: 'Jean', lastName: 'Lou', email: 'test@test.com', profilPic: pic, location: 'Chnok City' },
        { id: 2, firstName: 'Tan', lastName: 'Vu', email: 'test@test.com', profilPic: pic2, location: 'Kabul' },
    ])

    useEffect(() => {
        //  setTeachers(
        //      TeacherService.getTeachers(setTeachers)
        //  )
    }, [])

    return (
        <div>
            <h1 className="text-center"> Teachers List</h1>

            <TeachersWrapper>
                {teachers.map(teacher => (
                    <StyledLink to={`/teachers/${teacher.id}`}>
                        <Bubble name={teacher.firstName} bg={teacher.profilPic} location={teacher.location} />
                    </StyledLink>
                ))}
            </TeachersWrapper>
            {/* <table className="table table-striped">
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
            </table> */}
        </div>
    )
}

export default Teachers