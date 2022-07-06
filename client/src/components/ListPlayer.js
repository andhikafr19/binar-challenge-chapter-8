import React from "react";
import { Link } from "react-router-dom";

function ListPlayer() {
    return (
        <>
            <h5 className="text-primary border text-center mt-5">Ini Halaman List Player</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Experiance</th>
                        <th scope="col">Level</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto@gmail</td>
                        <td>1000</td>
                        <td>30</td>
                        <td><button class="btn btn-warning"><Link to={'/edit'}>Edit</Link></button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton@gmail</td>
                        <td>20000</td>
                        <td>20</td>
                        <td><button class="btn btn-warning"><Link to={'/edit'}>Edit</Link></button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>larry@twitter</td>
                        <td>20000</td>
                        <td>20</td>
                        <td><button class="btn btn-warning"><Link to={'/edit'}>Edit</Link></button></td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
                <button class="btn btn-primary">
                    <Link class="text-white text-decoration-none" to={'/create'}>Create Player</Link>
                </button>    
            </div>
            
        </>
    )
}

export default ListPlayer