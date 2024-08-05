import './Member.css'

const Member = (props) => {
    return(
        <div className='member col-md-4 ani_visible'>
            <img src={props.imagem} alt={props.nome} title={props.nome} className='image_team'/>
            <h6>{props.nome}</h6>
            <p>{props.trabalho}</p>
        </div>
    )
}

export default Member;