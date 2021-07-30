AFRAME.registerComponent('bullets', {
    init: function () {
        addEventListener("click",(e)=>{
            this.shoot()
        })
    },
    shoot: function(){
        camera = document.getElementById("camera").object3D
        dir = new THREE.Vector3()
        camera.getWorldDirection(dir)

        gunPos = new THREE.Vector3()
        document.getElementById("bullet-holder").object3D.getWorldPosition(gunPos)

        bullet=document.createElement("a-entity")
        bullet.setAttribute("position", {x: gunPos.x, y: gunPos.y, z: gunPos.z})
        bullet.setAttribute("geometry",{primitive:"sphere",radius:0.03})
        bullet.setAttribute("velocity", dir.multiplyScalar(-10))
        bullet.setAttribute("dynamic-body",{shape:"sphere",mass:"0"})
        bullet.addEventListener("collide",this.onCollide)
        document.getElementById("scene").appendChild(bullet)
    },
    onCollide:function(e){
        var bullet = e.detail.target.el
        // console.log(bullet);
        bullet.removeEventListener("collide",this.shoot)
        scene=document.getElementById("scene")
        console.log(scene);
        // removeChild(bullet)
    }
});
