import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" className={css.profileImg} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
