AFRAME.registerComponent("terrain-rotation", {
    schema: {
        speedRotation: { type: "number", default: 0 }
    },

    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key == "ArrowRight") {
                if (this.data.speedRotation < 0.1) {
                    this.data.speedRotation += 0.01
                }
            }
            if (e.key == "ArrowLeft") {
                if (this.data.speedRotation > -0.1) {
                    this.data.speedRotation -= 0.01
                }
            }
        })
    },
    tick:function(){
        var maprotation=this.el.getAttribute("rotation")
        maprotation.y += this.data.speedRotation
        this.el.setAttribute("rotation",{
            x:maprotation.x,
            y:maprotation.y,
            z:maprotation.z
        })
    }
})


AFRAME.registerComponent("plane-rotation", {
    schema: {
        speedRotation: { type: "number", default: 0 }
    },

    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedRotation= this.el.getAttribute("rotation")
        })
    }

})