import './CityCards.scss';

export const CityCards=({ imageUrl , cityName , country , places}) =>{
  return (
    <div className='cards'>
      <img src={imageUrl} alt='cityImage'></img>
      
      <div className='cityInfo'>

      <p>{cityName} , {country}</p>
      <h6>{places} places</h6>
      </div>
    
    </div>
  )
}
