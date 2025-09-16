import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import rayquazaModel from "../assets/models/wii_-_super_smash_bros_brawl_-_rayquaza_trophy.glb";

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(rayquazaModel);

  // Rotate the model slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001; // Adjust the speed of rotation here
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.mat1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.mat3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.mat4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.mat5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.mat6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.mat7}
        />
      </group>
    </group>
  );
}

useGLTF.preload(rayquazaModel);
