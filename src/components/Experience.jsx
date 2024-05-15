import { Environment, OrbitControls } from "@react-three/drei";
import {
  Joystick,
  insertCoin,
  isHost,
  myPlayer,
  onPlayerJoin,
  useMultiplayerState,
} from "playroomkit";
import { useEffect, useState } from "react";
import { Bullet } from "./Bullet";
import { BulletHit } from "./BulletHit";
import { CharacterController } from "./CharacterController";
import { Map } from "./Map";

function Experience(){
  const [players, setPlayers] = useState([]);
  const start = async () => {
    // Start the game
    await insertCoin();

    // Create a joystick controller for each joining player
  //   onPlayerJoin((state) => {
  //     // Joystick will only create UI for current player (myPlayer)
  //     // For others, it will only sync their state
  //     const joystick = new Joystick(state, {
  //       type: "angular",
  //       buttons: [{ id: "fire", label: "Fire" }],
  //     });
  //     const newPlayer = { state, joystick };
  //     state.setState("health", 100);
  //     state.setState("deaths", 0);
  //     state.setState("kills", 0);
  //     setPlayers((players) => [...players, newPlayer]);
  //     state.onQuit(() => {
  //       setPlayers((players) => players.filter((p) => p.state.id !== state.id));
  //     });
  //   });
  // };

  useEffect(() => {
    start();
  }, []);
  }


  return (

    
    <>
    
      <directionalLight
       position ={[25,18, -25]}
        intensity={0.3}
        castShadow
        shadow-camera-near={0}
        position-x={idx * 2}
        shadow-camera-far = {80}
        shadow-camera-left={-30}
        shadow-camera-right={40}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0001}
        />

        <OrbitControls />
        <Map />
        {/* {players.map(({ state, joystick }, index) => (
        <CharacterController
          key={state.id}
          state={state}
          userPlayer={state.id === myPlayer()?.id}
          joystick={joystick}
          onKilled={onKilled}
          onFire={onFire}
          downgradedPerformance={downgradedPerformance}
        />
      ))} */}
      <Environment preset="sunset" />
    </>
  )
}

export default Experience;