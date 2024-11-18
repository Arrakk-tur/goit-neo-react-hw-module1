import css from './FriendList.module.css'
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
<div className={css.friendItem}>
  <img src={avatar} alt={name} width="48" className={css.avatar} />
    <p className={css.name}>{name}</p>
  <p className={`status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</p>
</div>
  );
};

export default FriendList



