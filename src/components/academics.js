import React, {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import DoneUnits from './doneUnits'
import RegisterCourse from './registerCourse'
import Searchbar from './searchbar'


export default function Academics(){
    const [search, setSearch] = useState('')
    const [units, setUnits] = useState([]);

    return(
    <section id="academics">
        <nav>
            <Link to="/academics/doneUnits" className='academics-tabs'>Attempted Units</Link>
            <Link to="/academics/register" className='academics-tabs'>Register New Units</Link>
            {/* <Link to="/academics/search" className='academics-tabs'>Searchbar</Link> */}
        </nav>
        <main>
            <Routes>
                <Route path='/' element={<DoneUnits/>}/>
                <Route path='/doneUnits' element={<DoneUnits units={units} setUnits={setUnits} search={search} setSearch={setSearch}/>}/>
                <Route path='/register' element={<RegisterCourse units={units} setUnits={setUnits}/>}/>
                <Route path='/search' element={<Searchbar search={search} setSearch={setSearch}/>}/>
            </Routes>
        </main>
        
    </section>
        
    )
}