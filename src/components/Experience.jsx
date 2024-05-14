import { Environment } from "@react-three/drei";
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

export const Experience = () => {
  const [players, setPlayers] = useState([]);

  const start = async () => {
    // Start the game
    await insertCoin();

  }

  useEffect(() => {
    start();
 

  onPlayerJoin((state) =>{
    const Joystick= new Joystick(state, {
      type: "angular",
      buttons: [{id: "fire", lable: "fire"}]
    })
    const newPlayer = {state, joystick};
    state.setState["health", 300];
    state.setState("deaths", 0)
    state.setState("kills", 0)
    setPlayers((players) => [...players, newPlayer]);
    state.onQuit(()=>{
      setPlayers((players)=> players.filter((p)=>p.state.id !==state.id))
    })
  }) 
},[])

  return (

    
    <>
      <Map />
      <directionalLight
    position ={[25,18, -25]}
        intensity={0.3}
        castShadow
        shadow-camera-near={0}
        shadow-camera-far = {80}
        shadow-camera-left={-30}
        shadow-camera-right={40}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0001}


        />
  
      <Environment preset="sunset" />
    </>
  );
};