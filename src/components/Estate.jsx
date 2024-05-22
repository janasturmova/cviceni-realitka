export const Estate = ({title, city, price, text, src }) => {
    return (
        <div className="container-estate">
            <div>
                <h2 className="title title1">{title}</h2>
                <h4 className="title">{city}</h4>
                <h3 className="title">Cena: {price} Kč</h3>
                <p>{text}</p>
            </div>
            <img src={src}/>
        </div>
    )
}