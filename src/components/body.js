import React, { useEffect } from "react"
import axios from "axios"
import Tweets from "./tweets.js"
import CreateModal from "./createModal.js"

export default function Body() {

    const [tweets, setTweets] = React.useState([])
    const [canCreate, setCanCreate] = React.useState(false)

    useEffect(() => {
        axios.get("https://laur-test-api.lixium.dev/tweets")
        .then(res => {
            console.log(res.data)
            setTweets([...res.data])
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    function openCreateModal() {
        setCanCreate(true)
    }

    return (
        <body>
            <button className="create-btn" onClick={openCreateModal}>Create Tweet</button>
            <div id="tweets-cont">
                {tweets.map((tweet, index) => {
                        var date = new Date(tweet.createdAt)
                        return (
                            <Tweets key={tweet.id} author={tweet.author} content={tweet.content} createdAt={tweet.createdAt} id={tweet.id} editedAt={tweet.updatedAt} />
                        )
                })}
            </div>
            {canCreate && <CreateModal close={() => {setCanCreate(false)}} />}
        </body>
    )
}