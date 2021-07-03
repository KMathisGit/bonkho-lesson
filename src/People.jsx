import React from 'react'

const PEOPLE = [
    { name: "Bob", sex: "M", age: 40, favoriteFood: "Pizza"},
    { name: "Bob", sex: "M", age: 30, favoriteFood: "Pizza"},
    { name: "Bob", sex: "M", age: 20, favoriteFood: "Pizza"},
    { name: "Bob", sex: "M", age: 50, favoriteFood: "Pizza"},
    { name: "Bob", sex: "M", age: 30, favoriteFood: "Pizza"},
    { name: "Bob", sex: "M", age: 20, favoriteFood: "Pizza"},
    { name: "Bob", sex: "M", age: 50, favoriteFood: "Pizza"},
]

export default function People() {

    const renderPeople = () => {
        return PEOPLE.map(person => (
            <div className="person">
                <label>Name</label>
                <div>{person.name}</div>
                <label>Sex</label>
                <div>{person.sex}</div>
                <label>Age</label>
                <div>{person.age}</div>
                <label>Favorite Food</label>
                <div>{person.favoriteFood}</div>
            </div>
        ))
    }

    return (
        <div className="people-container">
            {renderPeople()}
        </div>
    )
}
