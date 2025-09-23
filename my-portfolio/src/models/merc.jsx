import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import mercModel from "../assets/models/mercedes_f1_w14.glb";

export function Model(props) {
  const { nodes, materials } = useGLTF(mercModel);
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.005, 0.119, 3.463]}
        rotation={[0.366, -0.01, 0.001]}
        scale={[0.032, 0.018, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.034"]}
        />
      </group>
      <group
        position={[0.746, 0.316, 2.423]}
        rotation={[1.574, 0, -Math.PI / 2]}
        scale={[0.322, 0.185, 0.322]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.pirelli}
          position={[-0.123, 0.969, -0.84]}
          rotation={[0.014, 0.001, 0]}
          scale={[0.166, 0.288, 0.166]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.pirelli}
          position={[0.266, 0.97, 0.808]}
          rotation={[3.126, -0.177, 3.14]}
          scale={[0.162, 0.281, 0.162]}
        />
      </group>
      <group
        position={[-0.513, 0.376, 2.472]}
        rotation={[-0.09, 0.082, 0.005]}
        scale={[0.002, 0.009, 0.053]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[0.417, 0.514, 1.007]}
        rotation={[-0.124, 0.11, 0.014]}
        scale={[0.013, 0.017, 0.013]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials["Material.034"]}
        />
      </group>
      <group
        position={[0.002, 0.626, 0.476]}
        rotation={[-0.332, -0.004, -0.002]}
        scale={[0.103, 0.029, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials["Material.032"]}
        />
      </group>
      <group
        position={[0.73, 0.32, -0.717]}
        rotation={[-2.822, 0, -Math.PI / 2]}
        scale={[0.331, 0.196, 0.331]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.pirelli}
          position={[0.397, 0.983, 0.737]}
          rotation={[3.125, -0.387, 3.137]}
          scale={[0.157, 0.266, 0.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.pirelli}
          position={[-0.285, 0.968, -0.799]}
          rotation={[0.015, 0.231, -0.003]}
          scale={[0.157, 0.266, 0.157]}
        />
      </group>
      <group
        position={[0.007, 0.546, 1.504]}
        rotation={[3.073, 0.022, -Math.PI]}
        scale={[0.015, 0.017, 0.005]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials["Material.023"]}
        />
        <group position={[-0.978, -0.715, 0.476]} scale={[1.201, 1.043, 0.986]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials["Material.019"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials["Material.021"]}
          position={[-5.06, -2.788, 0.58]}
          scale={[0.262, 0.714, 0.978]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials["Material.020"]}
          position={[-5.404, -5.268, 0.58]}
          rotation={[0, 0, 0.383]}
          scale={[0.557, 0.494, 2.045]}
        />
      </group>
      <group
        position={[0.045, 0.498, 1.492]}
        rotation={[-1.568, 0, 0]}
        scale={[-0.005, 0.003, 0.005]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials["Material.027"]}
        />
      </group>
      <group
        position={[0.027, 0.482, 1.492]}
        rotation={[-1.568, 0, 0]}
        scale={[-0.005, 0.003, 0.005]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials["Material.025"]}
        />
      </group>
      <group position={[0.01, 0.211, -0.845]} scale={[0.042, 0.066, 0.016]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials["Material.054"]}
        />
      </group>
      <group
        position={[0.298, 0.619, 1.487]}
        rotation={[-2.932, 0.974, 2.969]}
        scale={[0.012, 0.026, 0.042]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials["Material.155"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_92.geometry}
          material={materials["Material.166"]}
        />
      </group>
      <group
        position={[-0.708, 0.316, 2.423]}
        rotation={[1.958, 0, Math.PI / 2]}
        scale={[0.322, 0.187, 0.322]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_162.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_163.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_164.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_165.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_166.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_168.geometry}
          material={materials.pirelli}
          position={[-0.258, 1.005, -0.815]}
          rotation={[0.015, 0.191, -0.002]}
          scale={[0.166, 0.286, 0.166]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_170.geometry}
          material={materials.pirelli}
          position={[0.224, 1.005, 0.817]}
          rotation={[3.126, -0.123, 3.14]}
          scale={[0.162, 0.279, 0.162]}
        />
      </group>
      <group
        position={[-0.698, 0.32, -0.723]}
        rotation={[0.446, 0, Math.PI / 2]}
        scale={[0.331, 0.196, 0.331]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_172.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_173.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_174.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_175.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_176.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_178.geometry}
          material={materials.pirelli}
          position={[0.071, 0.958, -0.859]}
          rotation={[0.015, -0.229, 0.003]}
          scale={[0.162, 0.275, 0.162]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_180.geometry}
          material={materials.pirelli}
          position={[-0.062, 0.988, 0.828]}
          rotation={[3.133, 0.157, 3.132]}
          scale={[0.158, 0.268, 0.158]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials["Material.006"]}
        position={[0.208, 0.482, 2.089]}
        rotation={[-0.073, -0.745, -0.169]}
        scale={[0.033, 0.012, 0.032]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials["Material.006"]}
        position={[0.175, 0.46, 2.459]}
        rotation={[0.01, 0.062, -0.084]}
        scale={[0.031, 0.014, 0.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials["Material.006"]}
        position={[0.191, 0.485, 2.328]}
        rotation={[-2.94, 0.09, 0.352]}
        scale={[0.031, 0.01, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials["Material.006"]}
        position={[0.16, 0.349, 2.547]}
        rotation={[-2.939, -0.256, 0.099]}
        scale={[0.032, 0.011, 0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials["Material.007"]}
        position={[0, 0.587, 1.736]}
        rotation={[0.003, 0, 0]}
        scale={[0.029, 0.016, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials["Material.009"]}
        position={[0.121, 0.19, 3.19]}
        rotation={[0.292, -0.032, 0.024]}
        scale={[0.01, 0.01, 0.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials["Material.014"]}
        position={[0.634, 0.094, 0.554]}
        rotation={[-0.017, 0, 0]}
        scale={[0.064, 0.075, 0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials["Material.015"]}
        position={[0, 0.072, 0.944]}
        rotation={[0.003, 0, 0]}
        scale={[0.102, 0.046, 0.854]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_72.geometry}
        material={materials["Material.028"]}
        position={[0.098, 0.28, -0.882]}
        rotation={[0.003, 0, 0]}
        scale={[0.068, 0.019, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials["Material.030"]}
        position={[-0.079, 0.448, -0.825]}
        scale={0.027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_76.geometry}
        material={materials["Material.029"]}
        position={[0.006, 0.134, -0.699]}
        scale={[0.438, 0.022, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_78.geometry}
        material={materials["Material.033"]}
        position={[0.007, 0.423, -0.731]}
        scale={[0.031, 0.037, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials["Material.031"]}
        position={[0.534, 0.328, -0.708]}
        rotation={[-3.018, 0.055, -0.041]}
        scale={[-0.026, 0.026, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials["Material.031"]}
        position={[0.534, 0.261, -0.744]}
        rotation={[Math.PI, 0, 0.138]}
        scale={[-0.026, 0.026, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_84.geometry}
        material={materials["Material.031"]}
        position={[0.346, 0.28, -0.708]}
        rotation={[Math.PI / 2, 0.113, -Math.PI / 2]}
        scale={[0.02, 0.247, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials["Material.065"]}
        position={[0.008, 0.363, -0.804]}
        rotation={[1.511, 0, 0]}
        scale={[0.029, 0.032, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_94.geometry}
        material={materials.amg_logo}
        position={[0.189, 0.518, 1.908]}
        rotation={[1.62, 0, -1.467]}
        scale={[0.042, 0.036, 0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials.iwc_sponsor_1}
        position={[0.903, 0.283, 2.932]}
        rotation={[Math.PI / 2, 0.05, -1.616]}
        scale={0.084}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98.geometry}
        material={materials.iwc_sponsor_1}
        position={[-0.881, 0.297, 2.912]}
        rotation={[1.576, -0.05, 1.627]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials.INEOS_1}
        position={[0.098, 0.814, 0.525]}
        rotation={[1.521, 0.345, -1.67]}
        scale={[0.758, 0.671, 0.772]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_102.geometry}
        material={materials.INEOS_1}
        position={[-0.086, 0.796, 0.483]}
        rotation={[1.6, -0.525, 1.706]}
        scale={[0.796, 0.73, 0.787]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials.amd_png}
        position={[0.248, 0.597, 0.632]}
        rotation={[1.56, 0.489, -1.553]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials.amg_logo}
        position={[-0.19, 0.518, 1.908]}
        rotation={[1.607, -0.008, 1.429]}
        scale={[0.042, 0.036, 0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_108.geometry}
        material={materials.amd_png}
        position={[-0.251, 0.597, 0.582]}
        rotation={[1.515, -0.467, 1.625]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials.petronas_png}
        position={[0.531, 0.365, 0.71]}
        rotation={[1.447, -0.399, -1.735]}
        scale={[0.425, 0.443, 0.444]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_112.geometry}
        material={materials.teamviewer}
        position={[0.21, 0.569, 0.258]}
        rotation={[1.559, 0.48, -1.792]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_114.geometry}
        material={materials.petronas_png}
        position={[-0.48, 0.366, 0.432]}
        rotation={[1.371, 0.506, 1.915]}
        scale={[0.425, 0.443, 0.444]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_116.geometry}
        material={materials.teamviewer}
        position={[-0.213, 0.569, 0.258]}
        rotation={[1.566, -0.425, 1.843]}
        scale={0.066}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_118.geometry}
        material={materials.teamviewer}
        position={[0.519, 0.098, 3.37]}
        rotation={[0.057, 0.119, -0.05]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_120.geometry}
        material={materials.teamviewer}
        position={[-0.489, 0.104, 3.364]}
        rotation={[0.053, -0.215, 0.03]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_122.geometry}
        material={materials["44_lewis"]}
        position={[0.004, 0.521, 2.326]}
        rotation={[0.207, 0, 0]}
        scale={0.134}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_124.geometry}
        material={materials["44_lewis"]}
        position={[0.108, 0.53, -0.163]}
        rotation={[1.592, 0.107, -1.765]}
        scale={0.135}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_126.geometry}
        material={materials["44_lewis"]}
        position={[-0.098, 0.532, -0.163]}
        rotation={[1.525, -0.16, 1.894]}
        scale={0.142}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_128.geometry}
        material={materials.sndg_bw_1}
        position={[0.481, 0.647, -1.054]}
        rotation={[Math.PI / 2, -0.607, -Math.PI / 2]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_130.geometry}
        material={materials.sndg_bw_1}
        position={[-0.46, 0.647, -1.057]}
        rotation={[1.597, 0.659, 1.559]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_132.geometry}
        material={materials.petronas_png}
        position={[-0.151, 0.799, -1.165]}
        rotation={[0.578, -0.03, 0.054]}
        scale={[0.395, 0.411, 0.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_134.geometry}
        material={materials["Material.031"]}
        position={[0.325, 0.33, -0.525]}
        rotation={[1.426, 0.075, -2.415]}
        scale={[0.018, 0.222, 0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_136.geometry}
        material={materials.pirelli}
        position={[0.009, 0.325, 3.017]}
        rotation={[0.354, 0, 0]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_138.geometry}
        material={materials.akkodis}
        position={[0.011, 0.273, 3.139]}
        rotation={[0.45, 0, 0]}
        scale={0.069}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_140.geometry}
        material={materials["Mercedes-Logo"]}
        position={[0.004, 0.152, 3.424]}
        rotation={[0.394, 0, Math.PI]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_142.geometry}
        material={materials["Mercedes-Logo"]}
        position={[0.004, 0.784, 1.509]}
        rotation={[0.389, 0, Math.PI]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_144.geometry}
        material={materials.petronas_logo}
        position={[-0.001, 0.451, 2.613]}
        rotation={[0.225, 0.012, -0.01]}
        scale={0.135}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_146.geometry}
        material={materials.sndg_bw_1}
        position={[-0.506, 0.579, 2.397]}
        rotation={[Math.PI / 2, 0.086, -Math.PI / 2]}
        scale={0.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_148.geometry}
        material={materials.sndg_bw_1}
        position={[0.534, 0.562, 2.435]}
        rotation={[1.526, 0.025, 1.546]}
        scale={0.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_150.geometry}
        material={materials.stynium}
        position={[-0.004, 0.557, 2.051]}
        rotation={[0.069, -0.002, -0.027]}
        scale={0.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_152.geometry}
        material={materials.crowdstrike}
        position={[0.008, 0.355, 2.932]}
        rotation={[0.39, 0, 0]}
        scale={0.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_154.geometry}
        material={materials.crowdstrike}
        position={[0.241, 0.773, 1.262]}
        rotation={[0.992, 1.052, -1.156]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_156.geometry}
        material={materials.crowdstrike}
        position={[-0.244, 0.775, 1.262]}
        rotation={[0.591, -0.996, 0.754]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_158.geometry}
        material={materials.teamviewer}
        position={[0.196, 0.564, 1.444]}
        rotation={[1.28, 1.545, -1.376]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_160.geometry}
        material={materials.teamviewer}
        position={[-0.216, 0.568, 1.444]}
        rotation={[-3.141, -1.512, -3.001]}
        scale={0.034}
      />
    </group>
  );
}

useGLTF.preload(mercModel);
