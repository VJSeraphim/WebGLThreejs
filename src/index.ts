import * as three from "three"
import _ from "lodash"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const main = () => {
    const scene = new three.Scene()
    const renderer = new three.WebGLRenderer()
    const axesHelper = new three.AxesHelper(30)
    const loader = new three.TextureLoader()
    //const a = new three.Vector3(0, 1, 0)
    //const b = new three.Vector3(0, -1, 0)
    const light = new three.AmbientLight(0xffffff)

    const camera = new three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 1000)
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)

    let controls = new OrbitControls(camera, renderer.domElement)
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2; 
    controls.panSpeed = 0.8; 
    controls.minDistance = 5;
    controls.maxDistance = 100; 

    const spotLight = new three.SpotLight(0xffffff)
    spotLight.position.set(-40, 60, -10)
    spotLight.castShadow = true

    renderer.setClearColor(0xeeeeee)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true

    const material1 = [
        new three.MeshLambertMaterial({map: loader.load('src/textures/yellow1.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/apple.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/yellow2.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/cherry.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/yellow3.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/starfruit.png')})
    ]

    const material2 = [
        new three.MeshLambertMaterial({map: loader.load('src/textures/lychee.jpg')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/yellow4.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/grapefruit.jpg')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/yellow5.png')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/mango.jpg')}),
        new three.MeshLambertMaterial({map: loader.load('src/textures/yellow6.png')})
    ]

    const cubeGeometry = new three.BoxGeometry(8, 8, 8)
    //const cubeMaterial = new three.MeshLambertMaterial({ color: 0xF4FF42 })
    const cube = new three.Mesh(cubeGeometry, material1)

    const cube2Geometry = new three.BoxGeometry(6, 6, 6)
    //const cube2Material = new three.MeshLambertMaterial({ color: 0xF4FF42 })
    const cube2 = new three.Mesh(cube2Geometry, material2)

    cube.position.set(-4, 0, -3)
    cube2.position.set(4, 3, 14)
    //cube.rotateOnAxis(a, 45)
    //cube2.rotateOnAxis(b, 60)
    
    scene.add(cube)
    scene.add(cube2)
    scene.add(spotLight)
    scene.add(axesHelper)
    scene.add(light)

    document.getElementById("output").appendChild(renderer.domElement)

    const render = function() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);

        controls.update()
      }

    render()

    const btnX = document.createElement("BUTTON")
    const btnX_text = document.createTextNode("X-axis Clockwise")
    const btnXC = document.createElement("BUTTON")
    const btnXC_text = document.createTextNode("X-axis Counter-Clockwise")
    
    const btnY = document.createElement("BUTTON")
    const btnY_text = document.createTextNode("Y-axis Clockwise")
    const btnYC = document.createElement("BUTTON")
    const btnYC_text = document.createTextNode("Y-axis Counter-Clockwise")

    const btnZ = document.createElement("BUTTON")
    const btnZ_text = document.createTextNode("Z-axis Clockwise")
    const btnZC = document.createElement("BUTTON")
    const btnZC_text = document.createTextNode("Z-axis Counter-Clockwise")

    btnX.appendChild(btnX_text)
    btnXC.appendChild(btnXC_text)
    btnY.appendChild(btnY_text)
    btnYC.appendChild(btnYC_text)
    btnZ.appendChild(btnZ_text)
    btnZC.appendChild(btnZC_text)

    document.body.appendChild(btnX)
    document.body.appendChild(btnXC)
    document.body.appendChild(btnY)
    document.body.appendChild(btnYC)
    document.body.appendChild(btnZ)
    document.body.appendChild(btnZC)
    
    btnX.onclick = function() {
        cube.rotation.x += 0.3
        cube2.rotation.x += 0.3
    }

    btnXC.onclick = function() {
        cube.rotation.x += -0.3
        cube2.rotation.x += -0.3
    }


    btnY.onclick = function() {
        cube.rotation.y += 0.3
        cube2.rotation.y += 0.3
    }

    btnYC.onclick = function() {
        cube.rotation.y += -0.3
        cube2.rotation.y += -0.3
    }


    btnZ.onclick = function() {
        cube.rotation.z += 0.3
        cube2.rotation.z += 0.3
    }

    btnZC.onclick = function() {
        cube.rotation.z += -0.3
        cube2.rotation.z += -0.3
    }

}
 
window.onload = main
