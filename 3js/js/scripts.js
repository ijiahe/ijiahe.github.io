let scene, camera, render


function init() {

    scene = new THREE.Scene({ alpha : true});
    scene.background = null;

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.set(700,100,0);



    light = new THREE.AmbientLight(0xFFFFFF, 2);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha : true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 300;
    controls.maxDistance = 1500;
    controls.target.set(-35,90,0);
    controls.update();

    document.body.appendChild(renderer.domElement);


    let loader = new THREE.GLTFLoader()
    loader.load('./mcskin2.glb', function(gltf){
        skin = gltf.scene.children[0]
        skin.scale.set(0.5, 0.5, 0.5)
        scene.add(gltf.scene)
        animate();

    })
    

    window.addEventListener('resize',function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    });
}

function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
init()