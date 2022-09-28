const foodControllers=require("../Controllers/food.controllers");


module.exports=app=>{
    app.get("/api/read",foodControllers.getAll)
    app.post("/api/add",foodControllers.create)
}