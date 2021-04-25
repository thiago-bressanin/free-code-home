import { ThrowStmt } from "@angular/compiler";
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {  BehaviorSubject } from "rxjs";
import * as THREE from 'three';

@Component({
    selector: 'fcode-three',
    templateUrl: './three.component.html',
    styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements AfterViewInit {

    @ViewChild('content', { read: ElementRef, static: false }) content: ElementRef;

    public camera: THREE.Camera;
    public scene: THREE.Scene;
    public renderer: THREE.WebGLRenderer;
    public geometry: THREE.Geometry;
    public material: THREE.Material;
    public mesh: THREE.Mesh;
    public fps: BehaviorSubject<number> = new BehaviorSubject(0);
    public lights: THREE.DirectionalLight[] = [];
    
    constructor() {
    }

    public init() {
        this.camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.outerHeight, 1, 200);
        this.camera.position.z = 200;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x333);
        this.scene.fog = new THREE.Fog(0xb7232a, 1000, 3500);

        //

        this.scene.add(new THREE.AmbientLight(0x444444));

        this.lights.push(new THREE.DirectionalLight(0xb7232a, 0.2));
        this.lights[0].position.set(1, 1, 1);


        this.lights.push(new THREE.DirectionalLight(0xb7232a, 2.5));
        this.lights[1].position.set(0, - 1, 0);

        this.lights.forEach(i => this.scene.add(i));


        //

        const triangles = 5000;

        const geometry = new THREE.BufferGeometry();

        const positions = [];
        const normals = [];
        const colors = [];

        const color = new THREE.Color();

        const n = 100, n2 = n / 2;	// triangles spread in the cube
        const d = 50, d2 = d / 2;	// individual triangle size

  
        for (let i = 0; i < triangles; i++) {

            // positions

            const x = Math.random() * n - n2;
            const y = Math.random() * n - n2;
            const z = Math.random() * n - n2;

            const ax = x + Math.random() * d - d2;
            const ay = y + Math.random() * d - d2;
            const az = z + Math.random() * d - d2;

            const bx = x + Math.random() * d - d2;
            const by = y + Math.random() * d - d2;
            const bz = z + Math.random() * d - d2;

            const cx = x + Math.random() * d - d2;
            const cy = y + Math.random() * d - d2;
            const cz = z + Math.random() * d - d2;

            positions.push(ax, ay, az);
            positions.push(bx, by, bz);
            positions.push(cx, cy, cz);

            // flat face normals

            pA.set(ax, ay, az);
            pB.set(bx, by, bz);
            pC.set(cx, cy, cz);

            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);

            cb.normalize();

            const nx = cb.x;
            const ny = cb.y;
            const nz = cb.z;

            normals.push(nx * 32767, ny * 32767, nz * 32767);
            normals.push(nx * 32767, ny * 32767, nz * 32767);
            normals.push(nx * 32767, ny * 32767, nz * 32767);

            // colors

            const vx = (x / n) + 0.5;
            const vy = (y / n) + 0.5;
            const vz = (z / n) + 0.5;

            color.setRGB(vx, vy, vz);

            colors.push(color.r * 255, color.g * 255, color.b * 255);
            colors.push(color.r * 255, color.g * 255, color.b * 255);
            colors.push(color.r * 255, color.g * 255, color.b * 255);
        }

        const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
        const normalAttribute = new THREE.Int16BufferAttribute(normals, 3);
        const colorAttribute = new THREE.Uint8BufferAttribute(colors, 3);

        normalAttribute.normalized = true;
        colorAttribute.normalized = true;

        geometry.setAttribute('position', positionAttribute);
        geometry.setAttribute('normal', normalAttribute);
        geometry.setAttribute('color', colorAttribute);

        geometry.computeBoundingSphere();

        const material = new THREE.MeshPhongMaterial({
            color: 0x81D4FA,
            specular: 0x241ab7,
            shininess: 100,
            side: THREE.DoubleSide,
            vertexColors: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        const line = new THREE.Line( geometry, material );
        this.scene.add(line);
        this.content.nativeElement.appendChild(this.renderer.domElement);
    }

    public click(): void {
        // this.lights.forEach((i: DirectionalLight) => {
        //     i.position.set(1, 1, 1);
        //     this.scene.remove(i);
        //     this.scene.add(i);
        // });

    }

    public animate(f: number): void {
        requestAnimationFrame(((v: number) => { this.animate(v); }));
        this.mesh.rotation.x += 0.001;
        this.mesh.rotation.y += 0.001;
        this.renderer.render(this.scene, this.camera);
    }

    public ngAfterViewInit(): void {
        this.init();
        this.animate(0);
    }

}