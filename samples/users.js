import React, {PropTypes} from 'react' // eslint-disable-line

export default Users

function Users({nameFilter}) {
  const users = [
    {name: 'Janice', friends: ['Albert', 'Nancy'], id: 23},
  ].filter(({name}) => name.toLowerCase().includes(nameFilter))
  return (
    <div
      className="user-list"
      id="users-section"
      data-test="users"
    >
      {users.map(user => (
        <div key={user.id}>{user.name} is friends with {user.friends.join(', ')}</div>
      ))}
    </div>
  )
}

Users.propTypes = {
  nameFilter: PropTypes.string,
}
