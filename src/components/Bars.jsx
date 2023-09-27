import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
const Bars = () => {
    const itemsRef = useRef([]);
    const itemsRef2 = useRef([]);

  useFrame((state) => {
    let elapsed =state.clock.getElapsedTime();


    for (let i = 0; i < itemsRef.current.length; i++) {
        let mesh = itemsRef.current[i];
        let mesh2 = itemsRef2.current[i];
      let z = (i - 7) * 5 +((elapsed * 1.8) %5) *2;
      mesh.position.set(2, 10, -z);
      mesh2.position.set(12, 4.5, -z);
    }
  });
  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[2, 2, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
        >
          <boxGeometry args={[20, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[20, 10, 0]}
          key={i}
          ref={(el) => (itemsRef2.current[i] = el)}
        >
          <boxGeometry args={[1, 12, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </>
  );
};

export default Bars;
