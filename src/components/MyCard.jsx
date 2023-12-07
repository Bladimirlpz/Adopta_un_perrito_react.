import Tags from "./Tags"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './MyCard.css'

function MyCard ({img,nombre,descripcion,raza,color}) {
    return (
        <>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Tags raza={raza} backGroundColor={color}/>
            </Card.Body>
        </Card>
        </>
    )
}

export default MyCard