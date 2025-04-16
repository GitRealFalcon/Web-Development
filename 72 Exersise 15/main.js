import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let files = fsn.readdirSync("E:\\Web Development\\72 Exersise 15");
let dir = "E:\\Web Development\\72 Exersise 15/";

for (const item of files) {

    let ext = path.extname(item).replace(".","");
    if (ext != "json" && ext != "js" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(dir, ext))) {
            fs.rename(path.join(dir, item), path.join(dir, ext, item))
        } else {
            await fs.mkdir(ext);
            fs.rename(path.join(dir, item), path.join(dir, ext, item))
        }

    }
}
