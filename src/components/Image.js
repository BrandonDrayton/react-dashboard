import { useEffect, useState } from "react"

function UserImage() {
    const [userImage, setUserImage] = useState([])
    const getImage = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then(res => res.json())
            .then(data => {
                setUserImage(data.results)
                console.log(data.results)
            })
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <div className="UserImage">
            {
                userImage.map(user => (
                    < div >
                        {console.log(user.picture.large)}
                        <img src={user.picture.large} width="250" />
                        <h2 className='imgName'>{user.name.first}{user.name.last}</h2>
                    </div>
                ))
            }
        </div >
    )
}

export default UserImage