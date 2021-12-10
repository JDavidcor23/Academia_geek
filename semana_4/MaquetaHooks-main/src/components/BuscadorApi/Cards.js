import React from 'react';

const Cards = ({cate}) => {
    const [stateImages, setStateImages] = React.useState([])
    React.useEffect(()=>{
        imgGif(cate)
        .then(imgData => setStateImages(imgData))
    }, [cate])
    const imgGif = async (cate) =>{
        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(cate)}&limit=10&api_key=RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu`
        const resp = await fetch(url)
        const {data} = await resp.json()

        const imgData = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        return imgData
    }
    imgGif()
    return (
        <div>
            <h1>lalalal</h1>
            <ol>
                {
                    stateImages.map(img =>(
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} alt="imagen"/>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
};

export default Cards;