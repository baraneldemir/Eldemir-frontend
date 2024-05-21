import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Servislerimiz.css'
export default function Servislerimiz() {

  const servicesData = [
    {
      id: 1,
      icon: 'fas fa-clone',
      title: 'Aile Hukuku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 2,
      icon: 'fas fa-snowflake',
      title: 'Arabuluculuk Hizmeti',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 3,
      icon: 'fas fa-plug',
      title: 'Ceza Hukuku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 4,
      icon: 'fas fa-desktop',
      title: 'Icra ve Iflas Hukuku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 5,
      icon: 'fas fa-trophy',
      title: 'Is ve Sosyal Guvenlik Hukuku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 6,
      icon: 'fas fa-life-ring',
      title: 'Dava ve Uyusmazlik Cozumu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    }
  ]

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Calisma Alanlarimiz</h2>
          <div className="subtitle">Hizmet sundugumuz alanlar</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

