import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const CC = robots.map((user) => {
        return <Card key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}/>
    });
    return (
        <div>
            {CC}
        </div>
    );
};

export default CardList;