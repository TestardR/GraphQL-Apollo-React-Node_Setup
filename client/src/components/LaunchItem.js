import React from 'react';

export default function LaunchItem({ launch }) {
  const { mission_name, flight_number } = launch;
  return (
    <div>
      <h3>
        {mission_name} - {flight_number}
      </h3>
    </div>
  );
}
