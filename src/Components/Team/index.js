import Member from '../Member';
import './Team.css'

const Team = () => {

    const member = [
        {
          imagem: 'Images/members/Leo.jpg',
          nome: 'Leonardo Botelho',
          trabalho: 'Back-End Dev',
        },
        {
          imagem: 'Images/members/Raul.jpg',
          nome: 'Raul Clauson',
          trabalho: 'Front-End Dev',
        },
        {
          imagem: 'Images/members/Mi.jpg',
          nome: 'Mirian Bronzati',
          trabalho: 'AI Dev',
        },
    ]

    return(
        <section id='Team' className="container-fluid">
            <div className="team">
                <p className='ani_visible'>LERAMI - Quem Somos</p>
                <h5 className='ani_visible'>Os Mentes por Trás da LERAMI</h5>
            </div>
            <div className='members row'>
                {member.map(member => 
                <Member
                  key={member.nome} 
                  imagem={member.imagem}
                  nome={member.nome}
                  trabalho={member.trabalho}
                />)}
            </div>
        </section>
    )
}

export default Team;