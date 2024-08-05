import './Project.css'

const Project = (props) => {
    return(
        <div className='project col-md-6 ani_visible'>
            <img src={props.imagem} alt={props.acessibilidade} title={props.acessibilidade} className='image_proj'/>
            <p>{props.detalhes}</p>
            <div className='project_title'>
                <h4>{props.nome}</h4>
                <p>{props.onde}</p>
            </div>
        </div>
    )
}

export default Project