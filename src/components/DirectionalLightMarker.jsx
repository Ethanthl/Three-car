import React from 'react';
import { SphereGeometry, MeshBasicMaterial, Mesh } from '@react-three/fiber';

// Custom component to visualize a directional light
const DirectionalLightMarker = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.2, 32, 32]} /> {/* Adjust the size as needed */}
      <meshBasicMaterial color="yellow" /> {/* Choose an appropriate color */}
    </mesh>
  );
};

export default DirectionalLightMarker;