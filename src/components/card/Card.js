import './cardStyles.css';

const Card = ({ user }) =>{

  const {name, birth_year} = user;

  return (
      <div className="card-container" key={name}>
          <img alt={`user ${name}`} src={`https://robohash.org/${Math.floor(Math.random() * 10 + 1)}?set=set1&size=180x180`}/>
          <h2>{name}</h2>
          <p>Birth Year: {birth_year}</p>
      </div>
  )
}

export default Card;