import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
               <a className="navbar-brand" href="/">
                 Puskesmas
               </a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
               <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/add-user/_add">Add Data</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/users">List Data</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Hubungi Kami Apabila terdapat kesalahan</a>
                    </li>
                </ul>
               </div>
            </div>
           </header>
        )
    }
}

export default HeaderComponent
