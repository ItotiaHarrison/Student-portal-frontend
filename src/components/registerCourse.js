import React, { useState } from 'react';
import Searchbar from "./searchbar"


export default function RegisterCourse({ courses, setCourses }) {
    const [search, setSearch] = useState("");
    const [formData, setFormData] = useState({
        unitCode: "",
        unitName: "",
        unitCategory: "",
    });

    function handleOnChange(e) {
        let name = e.target.name
        let value = e.target.value
        setFormData({
            ...formData, [name]: value
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((result) => result.json())
            .then((data) => {
                const newTransactionData = [...courses, data]
                setCourses(newTransactionData)
            })
    }



    return (
        <>
            <Searchbar Search={search} setSearch={setSearch}/>
            <section className="units-arranged">
                <div>
                    <header>Unit Code</header>
                </div>
                <div>
                    <header>Unit Name</header>
                </div>
                <div>
                    <header>Unit Category</header>
                </div>
            </section>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input type="text" name="Unit code" onChange={handleOnChange}/>
                    <input type="text" name="Unit Name" placeholder="Unit Name" onChange={handleOnChange} />
                    <input type="text" name="Unit Category" placeholder="Unit Category" onChange={handleOnChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Course
                </button>
            </form>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input type="text" name="Unit code" onChange={handleOnChange}/>
                    <input type="text" name="Unit Name" placeholder="Unit Name" onChange={handleOnChange} />
                    <input type="text" name="Unit Category" placeholder="Unit Category" onChange={handleOnChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Course
                </button>
            </form>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input type="text" name="Unit code" onChange={handleOnChange}/>
                    <input type="text" name="Unit Name" placeholder="Unit Name" onChange={handleOnChange} />
                    <input type="text" name="Unit Category" placeholder="Unit Category" onChange={handleOnChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Course
                </button>
            </form>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input type="text" name="Unit code" onChange={handleOnChange}/>
                    <input type="text" name="Unit Name" placeholder="Unit Name" onChange={handleOnChange} />
                    <input type="text" name="Unit Category" placeholder="Unit Category" onChange={handleOnChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Course
                </button>
            </form>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input type="text" name="Unit code" onChange={handleOnChange}/>
                    <input type="text" name="Unit Name" placeholder="Unit Name" onChange={handleOnChange} />
                    <input type="text" name="Unit Category" placeholder="Unit Category" onChange={handleOnChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Course
                </button>
            </form>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input type="text" name="Unit code" onChange={handleOnChange}/>
                    <input type="text" name="Unit Name" placeholder="Unit Name" onChange={handleOnChange} />
                    <input type="text" name="Unit Category" placeholder="Unit Category" onChange={handleOnChange} />
                </div>
                <button className="ui button" type="submit">
                    Add Course
                </button>
            </form>
        </>

    )
}