import React from "react";
import { Link } from "react-router-dom";

function EditPlayer() {
    return (
        <>
            <div className="container border">
                <h5 class="text-center mt-5">Ini Halaman Edit Player</h5>
                <div className="row">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Experiance</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Level</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary"><Link className="text-white text-decoration-none" to={'/'}>Update</Link></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditPlayer