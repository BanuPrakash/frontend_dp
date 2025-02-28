import React, { useEffect, useState } from 'react'

function withHover() {

}
function withLoading(Element, url) {
    return (props) => {
        let [data, setData] = useState();

        useEffect(() => {
            fetch(url)
                .then(response => response.json()).
                then(data => setData(data));
        }, []);

        if (!data) {
            return <div>Loading...</div>
        }
        return <Element {...props} data={data} />
    }
}

function DogImage(props) {
    return (
        <div>
            <img src={props.data.message} />
        </div>
    )
}

export default withHover(withLoading(DogImage, "https://dog.ceo/api/breeds/image/random"));
