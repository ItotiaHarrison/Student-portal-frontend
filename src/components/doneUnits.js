import React, { useEffect } from 'react';
// import Searchbar from "./searchbar"
import Course from "./course"

export default function DoneUnits({ courses, setCourses, search, setSearch }) {


    useEffect(() => {
        fetch("")
            .then((result) => result.json())
            .then((data) => {
                setCourses(data)
            })
    }, [setCourses]);

    const filteredCourses = courses.filter((course) => course.description.toLowerCase().includes(search.toLowerCase()))

    const courseList = filteredCourses.map((course) => {
        return (
            <Course
                key={course.id}
                code={course.code}
                name={course.name}
                category={course.category}
                courses={courses}
                setCourses={setCourses}
            />
        )
    })

    return (
        <>
            {/* <Searchbar /> */}
            <section className="units-arranged">
                <div>
                    <header>Unit Code</header>
                    <p></p>
                </div>

                <div>
                    <header>Unit Name</header>
                    <p></p>

                </div>

                <div>
                    <header>Unit Category</header>
                    <p></p>

                </div>

                {courseList}
            </section>

            
        </>

    )
}