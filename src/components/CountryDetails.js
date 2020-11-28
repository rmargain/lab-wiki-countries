import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'

export const CountryDetails = ({location, history}) => {
    console.log("que es esto",location)
    
    return(

    <div style={{width:'100%'}}>
        <h1>{location.state.name.official}</h1>
         <table className="table">
             <thead/>
                <tbody>
                    <tr>
                         <td>Capital</td>
                         <td>{location.state.capital[0]=== "" ? "no tiene capital" : location.state.capital[0] }</td>
                         </tr>
                         <tr>
                           <td>Area</td>
                           <td>{location.state.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                         <td>Borders</td>
                         <td>
                         <ul>
                            {
                            location.state.borders.length ? 
                            location.state.borders.map((item, index_b)=> <li key={index_b}>
                            <Link to={{
                                pathname: "/detail",
                                state:countries.find(element => item === element.cca3)}}>
                                {item}
                            </Link>
                            </li>)
                            : 
                            <li>No tiene colindancias</li>
                             }
                         </ul>
                         </td>
                         </tr>
                         </tbody>
                         </table>
                         </div>
);}