import style from '../cssModules/profileCard.module.css'
import avatar from '../assets/astro_avatar_1.jpg'

const Profile = props => {

return(

    <div className={style.card}>

      <img className={style.profileImg} src={avatar} alt='no photo'/>
      <h5>Name: </h5><span>Foo Bar</span>
      <h5>email: </h5><span>helloWorld@email.com</span>

    </div>

  )
}

export default Profile
