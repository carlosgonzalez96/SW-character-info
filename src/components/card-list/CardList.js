import Card from "../card/Card";

import './cardListStyles.css';

const CardList = ({ users }) =>{
    return (
    <div className="card-list">
        {users.map(user => {
            return <Card user={user}/>
        })}
    </div>);
};

export default CardList;