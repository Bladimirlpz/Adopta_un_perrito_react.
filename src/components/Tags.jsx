import Badge from 'react-bootstrap/Badge'

function Tags ({raza,backGroundColor}) {
    return (
        <Badge bg={backGroundColor}>{raza}</Badge>
    )
}

export default Tags