import './List.css';

function List({title,price,image,rating})
{
    const querypar=`title=${title}&price=${price}&image=${image}`;

    console.log();
    return(
        <div className="Fakestorecard-card" >
           <img src={image} alt="newimg" />
           <p>{title}</p>
           <p>{price} rupees</p>
           <p>Rating:{rating.rate}</p>
           <p id="fakestotrcard-buynow">Buy Now</p>
           

        </div>
    )

}
export default List;