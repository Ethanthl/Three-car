import logo from "./logo.svg";
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Car from "./components/Car";

import "./App.css";
import Ground from "./components/Ground";
import Background from "./components/Background";
import Bars from "./components/Bars";
import DirectionalLightMarker from "./components/DirectionalLightMarker";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.25, 2]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={40} position={[4, 1,5]} />
      <color args={[0, 0, 0]} attach={"background"} />
      <ambientLight color={0xfff5e1} intensity={5}/>
      <directionalLight
        position={[12, 15, -15]}
        color={0xfff5e1}
        intensity={10}
        castShadow
        shadow-mapSize-width={4096}
  shadow-mapSize-height={4096}
      />
      <DirectionalLightMarker position={[12, 15, -15]} />
      {/* <directionalLight
        intensity={1.5} // Adjust the intensity to control brightness
        position={[5, 10, 0]} // Adjust the position as needed
        angle={50}
        color={0xfff5e1} // Use a white color to simulate sunlight
        castShadow // Enable shadows if needed
        shadow-mapSize-width={1024} // Adjust shadow map size
        shadow-mapSize-height={1024}
        shadow-camera-far={50} // Adjust shadow camera settings
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}
      {/* <ambientLight intensity={2}/> */}
      {/* <spotLight
        color={[1, 0.25, 0.7]}
        intensity={15}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={30}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
 */}
      {/* <spotLight
        color={[0.14, 0.5, 1]}
        intensity={20}
        angle={-0.8}
        penumbra={0.5}
        position={[4,6, 0]}
        castShadow

      /> */}
      <Car />
      <Ground />
      <Background />
      <Bars />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows className="canvas">
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
