import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { isHost } from "playroomkit";
import { useEffect, useMemo, useRef } from "react";
import { Color, MathUtils, Vector3 } from "three";