"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SKILLS = [
  "Python","FastAPI","React","TypeScript","Docker",
  "Kubernetes","PostgreSQL","Machine Learning","LSTM","SVM",
  "Isolation Forest","Next.js","Linux","Git","Cybersecurity",
  "MITRE ATT&CK","FastAPI","Scikit-Learn","REST APIs","GitHub Actions",
  "Vayuntra","STOCKIXZ","AI Agents","Knowledge Graph","WebSockets",
];

export default function SkillGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.z = 3.2;

    // Globe wireframe
    const globeGeo = new THREE.SphereGeometry(1, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x1a6fff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Inner glow sphere
    const innerGeo = new THREE.SphereGeometry(0.98, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0a1428,
      transparent: true,
      opacity: 0.85,
    });
    scene.add(new THREE.Mesh(innerGeo, innerMat));

    // Equator ring (blue)
    const ring1Geo = new THREE.TorusGeometry(1.02, 0.004, 8, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x1a6fff, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    scene.add(ring1);

    // Tilted ring (red)
    const ring2Geo = new THREE.TorusGeometry(1.06, 0.003, 8, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xe8173a, transparent: true, opacity: 0.4 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 5;
    scene.add(ring2);

    // Outer orbit ring
    const ring3Geo = new THREE.TorusGeometry(1.55, 0.002, 8, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x1a6fff, transparent: true, opacity: 0.2 });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2.4;
    scene.add(ring3);

    // Dots on globe surface
    const dotGeo = new THREE.SphereGeometry(0.012, 6, 6);
    const dotMatBlue = new THREE.MeshBasicMaterial({ color: 0x4d94ff });
    const dotMatRed  = new THREE.MeshBasicMaterial({ color: 0xff4060 });
    for (let i = 0; i < 80; i++) {
      const phi   = Math.acos(-1 + (2 * i) / 80);
      const theta = Math.sqrt(80 * Math.PI) * phi;
      const dot = new THREE.Mesh(dotGeo, i % 5 === 0 ? dotMatRed : dotMatBlue);
      dot.position.setFromSphericalCoords(1.0, phi, theta);
      scene.add(dot);
    }

    // Skill label sprites as canvas textures
    const skillObjects: THREE.Sprite[] = [];
    SKILLS.forEach((skill, i) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256; canvas.height = 56;
      const ctx = canvas.getContext("2d")!;

      // Background pill
      const isRed = i % 4 === 0;
      ctx.fillStyle = isRed ? "rgba(232,23,58,0.18)" : "rgba(26,111,255,0.18)";
      ctx.strokeStyle = isRed ? "rgba(232,23,58,0.7)" : "rgba(26,111,255,0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(4, 8, 248, 40, 6);
      ctx.fill();
      ctx.stroke();

      // Text
      ctx.fillStyle = isRed ? "#FF6080" : "#4D94FF";
      ctx.font = "bold 18px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(skill, 128, 28);

      const texture = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.92 });
      const sprite = new THREE.Sprite(mat);

      // Distribute on sphere surface using fibonacci
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (i / (SKILLS.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const r = 1.38;
      sprite.position.set(
        Math.cos(theta) * radius * r,
        y * r,
        Math.sin(theta) * radius * r
      );
      sprite.scale.set(0.55, 0.14, 1);
      scene.add(sprite);
      skillObjects.push(sprite);
    });

    // Ambient light
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    // Mouse tracking for rotation
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("mousemove", onMouseMove);

    // Auto-rotation group
    const group = new THREE.Group();
    group.add(globe);
    skillObjects.forEach(s => group.add(s));
    scene.add(group);

    // Resize
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    let frame: number;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (-mouseY * 0.3 - targetY) * 0.05;

      group.rotation.y = t * 0.12 + targetX;
      group.rotation.x = targetY * 0.5;
      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.06;
      ring3.rotation.y = t * 0.05;

      // Pulse skill labels
      skillObjects.forEach((s, i) => {
        const mat = s.material as THREE.SpriteMaterial;
        mat.opacity = 0.7 + 0.3 * Math.sin(t * 0.8 + i * 0.3);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      mount.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
      onMouseDown={e => (e.currentTarget.style.cursor = "grabbing")}
      onMouseUp={e => (e.currentTarget.style.cursor = "grab")}
    />
  );
}
