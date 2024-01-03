import React from "react"
import EditModal from "./editModal"
import axios from "axios"

export default function Tweets(props) {
    var dateCreated = new Date(props.createdAt)
    var dateEdited = new Date(props.editedAt)
    
    const [canEdit, setCanEdit] = React.useState(false)

    function edit() {
        setCanEdit(true)
    }

    function deleteTweet(tweetId) {
        console.log("delete ", tweetId)
        axios.delete(`https://laur-test-api.lixium.dev/tweets/${tweetId}`)
        .then(res => console.log("Deleted tweet with ID: ", tweetId))
        .catch(err => console.log(err))
    }

    return (
        <div key={props.id} className="tweet-cont">
            <p className="tweet-author">{props.author}</p>
            <p className="tweet-content">{props.content}</p>
            <div className="tweet-cont-footer">
                <p className="tweet-date">
                    Created: {`${dateCreated.getDate() < 10 ? `0` + `${dateCreated.getDate()}` : dateCreated.getDate()}/${dateCreated.getMonth() < 10 ? `0` + `${dateCreated.getMonth() + 1}` : dateCreated.getMonth() + 1}/${dateCreated.getFullYear()}`}
                </p>
                <p className="tweet-date">
                    Edited: {`${dateEdited.getDate() < 10 ? `0` + `${dateEdited.getDate()}` : dateEdited.getDate()}/${dateEdited.getMonth() < 10 ? `0` + `${dateEdited.getMonth() + 1}` : dateEdited.getMonth() + 1}/${dateEdited.getFullYear()}`}
                </p>
                <button onClick={edit}>
                    Edit
                </button>
                <button onClick={() => {
                    deleteTweet(props.id)
                }}>
                    Delete
                </button>
            </div>
            {canEdit && <EditModal inputText={props.content} 
                                close={() => {setCanEdit(false)}} 
                                id={props.id} 
                                author={props.author}
                                 />}
        </div>
    )
}