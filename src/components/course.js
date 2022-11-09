import React from 'react'

function course({ code, name, category, courses, setCourses }) {

    function handleDeleteCourse() {
        fetch('', {
            method: "DELETE",
        })
            .then((result) => result.json())
            .then((data) => {
                const availableCourses = courses.filter((course) => {
                    return course.name !== data.name
                })
                setCourses(availableCourses)
            })
    }


    return (
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td><button className="ui button" onClick={handleDeleteCourse}>Delete Course</button></td>
        </tr>

    )
}

export default course