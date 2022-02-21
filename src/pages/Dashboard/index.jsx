import React from 'react'
import { Card, Table, Rate, Statistic } from 'antd'
import { Container, Row, Col } from 'react-bootstrap'

import Main from '../Main'

export default function Dashboard() {

  const dataSource = [
    {
      key: '1',
      name: 'Mike Jordan',
      rating: 3.2,
    },
    {
      key: '2',
      name: 'John Lennon',
      rating: 4.2,
    },
  ];
  
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Avaliação',
      dataIndex: 'rating',
      key: 'rating',
      render: (text, record) => (
        <>
        {/* <p>{record.rating}</p> */}
        <Rate allowHalf defaultValue={record.rating} />
        </>
      ),
    },
  ];

  let teste = <a>Realizadas</a>;

  return (
    
   <Main>
     <Container>
     <Row>
      <Col lg={6}>
        <Card title="Entregas">
          <Row>
            <Col lg={6}>
            <Statistic title={teste} value={112893} />
            </Col>
            <Col lg={6}>
            <Statistic title="Realizadas" value={112893} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col lg={3}>
        <Card title="Comércios">
          <Statistic title="Ativos" value={1.893} />
        </Card>
      </Col>
      <Col lg={3}>
        <Card title="Ranking Comerciantes TOP 10">
          tete
        </Card>
      </Col>
     </Row>
      <Row>
        <Col>
          <Card title="Ranking Comerciantes TOP 10">
            <Table dataSource={dataSource} columns={columns} pagination={{ position: ['none'] }} />
          </Card>
        </Col>
        <Col>
          <Card title="Ranking Entregadores TOP 10">
            <Table dataSource={dataSource} columns={columns}  pagination={{ position: ['none'] }} />
          </Card>
        </Col>
      </Row>
     </Container>
   </Main>
  )
}