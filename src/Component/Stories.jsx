import React, { useContext } from 'react'
import { AppContext } from './Context';
import './stories.css'

export default function Stories() {

    let { hits, isLoading, removePost,query,SearchPost } = useContext(AppContext);


    if (isLoading) {
        return (
            <>
                <div className="container-fluid newsbg">
                    <h1>Loding...</h1>
                </div>
            </>
        )
    }

    return (
        <div className='container-fluid newsbg py-3'>
            <div className="container newsHead py-3">
                <h2>Stories</h2>
                <input  type="search" name="search" id="search" value={query} onChange={(e)=>SearchPost(e.target.value)} />
            </div>
            {
                hits.map((curPost) => {
                    const { title, author, objectID, url, num_comments } = curPost;
                    return (

                        <div className="newsCard container my-2 py-3" key={objectID}>
                            <h2>{title}</h2>
                            <p>BY {author} | <span>{num_comments}</span> comments</p>

                            <div className="card_button d-flex justify-content-between ">
                                <a href={url} target='_blank'>read more </a>
                                <big type='button' onClick={() => removePost(objectID)}>REMOVE</big>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}


