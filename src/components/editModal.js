import axios from "axios"

export default function editModal(props) {
    
    function editTweet() {
        if (document.getElementById("editedTweet").value !== props.inputText) {
        axios.patch(`https://laur-test-api.lixium.dev/tweets/${props.id}`, {
            author: props.author,
            content: document.getElementById("editedTweet").value
        }).then(res => console.log(res.data))
        .catch(err => console.log(err))
        } else console.log("You have not made any changes")
    }
    
    return (
        <div className="edit-modal-cont">
            <textarea id="editedTweet" name="text" rows={5} cols={50} wrap="soft" defaultValue={props.inputText} />
            <div className="modal-btn-cont">    
                <button className="save-btn" onClick={editTweet}>Save</button>
                <button className="close-btn" onClick={props.close}>Close</button>
            </div>
        </div>
    )
}