import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div >
            <div className="cardBox">
                <div className="imgbox" style={{backgroundImage:`url('${props.cardImg}')`}}>
                </div>
                <div className="cardDetails py-3">
                    <div className="name my-2">
                        <big>{props.cardName}</big>
                    </div>
                    <div className="nameLink d-flex gap-4 justify-content-center">
                        <div className="face"><b><i class="bi bi-facebook"></i></b></div>
                        <div className="linkdin"><b><i class="bi bi-linkedin"></i></b></div>
                        <div className="twiter"><b><i class="bi bi-twitter"></i></b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
