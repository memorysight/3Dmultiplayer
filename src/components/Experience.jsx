import { Environment } from "@react-three/drei";

import { Map } from "./Map";

export const Experience = () => {


  return (
    <>
      <Map />
     
      <Environment preset="sunset" />
    </>
  );
};