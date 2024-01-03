import React from "react"
import axios from "axios"

export default function CreateModal(props) {
    
    var date = new Date()

    function createTweet() {
        axios.post("https://laur-test-api.lixium.dev/tweets", {
            author: "Laurentiu Malai",
            content: document.getElementById("createdTweet").value,
            // createdAt: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}Z`,
            // updatedAt: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}Z`
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="create-modal-cont">
            <textarea id="createdTweet" name="text" rows={5} cols={50} wrap="soft" placeholder="Write something..." />
            <div className="modal-btn-cont">    
                <button className="save-btn" onClick={createTweet}>Create</button>
                <button className="close-btn" onClick={props.close}>Close</button>
            </div>
        </div>
    )
}