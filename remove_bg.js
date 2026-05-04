import Jimp from 'jimp';

async function removeWhite() {
    try {
        console.log("Loading image...");
        const image = await Jimp.read('c:\\Users\\Asus\\Desktop\\C course\\WebSite\\Yalla Amigo photos\\Yalla Amigo photos\\Logo Yalla amigo.jpg');
        
        console.log("Scanning and removing background...");
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const red   = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue  = this.bitmap.data[idx + 2];

            if (red > 235 && green > 235 && blue > 235) {
                this.bitmap.data[idx + 3] = 0; // Transparent
            }
        });

        console.log("Saving image...");
        await image.writeAsync('c:\\Users\\Asus\\Desktop\\C course\\website\\Yalla-Cuisine\\Yalla-Cuisine\\client\\public\\favicon.png');
        console.log("Done!");
    } catch (e) {
        console.error("Error:", e);
    }
}

removeWhite();
