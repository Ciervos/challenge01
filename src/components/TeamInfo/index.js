import React from 'react'
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TeamInfo() {

      return <Container fluid className="teaminfo-cont">
      <Row>
      <Col>
      <h1>Equipo Actual:</h1>
      </Col>
      </Row>    
      <Row>
      <Col>
      Info powerstats
      </Col>    
      <Col>
      Info extra (peso,altura,aligns)
      </Col>
      </Row> 
      </Container>
    }
    
    export default TeamInfo;