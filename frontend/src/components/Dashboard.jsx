import React from 'react';
import { Card, Label, Text } from '@gravity-ui/uikit';
import "./User.css";

const Dashboard = () => {
  const mockData = {
    totalAttacks: 127,
    activeIncidents: 5,
    systemLoad: '45%',
    latestEvent: 'Обнаружена попытка Kerberoasting',
  };

  return (
    <div className="home">
      <Text variant="display-1">
        Дашборд
      </Text>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          marginTop: '30px'
        }}
      >
        <Card style={{ flex: '1 1 200px', padding: '16px' }}>
          <Text variant="header-1">Общее количество атак: </Text>
          <Text variant="header-1">{mockData.totalAttacks}</Text>
        </Card>

        <Card style={{ flex: '1 1 200px', padding: '16px' }}>
          <Text variant="header-1">Активные инциденты: </Text>
          <Text variant="header-1">{mockData.activeIncidents}</Text>
        </Card>

        <Card style={{ flex: '1 1 200px', padding: '16px' }}>
          <Text variant="header-1">Нагрузка на систему: </Text>
          <Text variant="header-1">{mockData.systemLoad}</Text>
        </Card>

        <Card style={{ flex: '1 1 200px', padding: '16px' }}>
          <Text variant="header-1">Последнее событие: </Text>
          <Text variant="header-1">{mockData.latestEvent}</Text>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
