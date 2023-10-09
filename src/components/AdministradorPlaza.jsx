import React from 'react'
import './AdministradorPlaza.css'

const AdministradorPlaza = () => {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function ParkingSpot({ number }) {
        const backgroundColor = getRandomColor();
        return (
            <div className="spot" style={{ backgroundColor }}>
                {number}
            </div>
        );
    }

    function ParkingLot() {
        return (
            <div className="parking-lot">
                {Array.from({ length: 100 }, (_, i) => (
                    <ParkingSpot key={i} number={i + 1} />
                ))}
            </div>
        );
    }
  return (
    <>
    <div className="administrador-plaza"> 
        <ParkingLot />
    </div>
    </>
    
  )
}

export default AdministradorPlaza