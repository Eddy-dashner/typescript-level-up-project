import multer from "multer";
const storage =multer.diskStorage({
    destination:function(req:any,file:any,cb:any){
        cb(null,"./upload")
    },
    filename :function(req:any,file:any,cb:any){
        cb(null,"image.png")
    },
})
const upload=multer({
    storage:storage
}   
)
export default upload;