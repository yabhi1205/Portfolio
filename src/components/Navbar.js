import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <i class="bi bi-x" id="clsnbr"></i>
                    <div className="logo my-5"><h3>ABHISHEK SINGHAL</h3></div>
                    <div className="links my-5">
                        <ul>
                            <li>HOME</li>
                            <li>PHOTOS</li>
                            <li>SKILLS</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}