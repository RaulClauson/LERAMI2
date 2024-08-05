import Project from '../Project'
import './Projects.css'

const Projects = (props) => {

    const project = [
        {
          imagem: 'Images/projects/VaptVupt.jpg',
          acessibilidade: 'Vapt-Vupt Logo',
          nome: 'Vapt-Vupt',
          onde: '(Challenge)',
          detalhes: 'Front-End • BRAND DESIGN • back-end • AI',
        },
        {
          imagem: 'Images/projects/BlueG.jpg',
          acessibilidade: 'Blue Guardians Logo',
          nome: 'Blue Guardians',
          onde: '(Global Solution)',
          detalhes: 'Front-End • BRAND DESIGN • back-end • AI',
        },
    ]

    return(
        <section id='Projects' className="container-fluid">
            <div className='title_Projects row'>
                <h3 className="col-md-6 ani_visible">{props.titulo}</h3>
                <p className="col-md-6 ani_visible" id="multipleStrings20">{props.texto}</p>
            </div>
            <div className='projects row'>
                {project.map(project => 
                <Project 
                    key={project.nome} 
                    imagem={project.imagem}
                    acessibilidade={project.acessibilidade}
                    nome={project.nome}
                    onde={project.onde}
                    detalhes={project.detalhes}
                />)}
            </div>
        </section>
    )
}

export default Projects