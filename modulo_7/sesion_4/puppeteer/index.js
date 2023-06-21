// import puppeteer from "puppeteer";
// import fs from 'fs/promises'
import Scraper from "images-scraper";


const google = new Scraper({
    puppeteer:{
        headless:true,
    },

});

export async function imgGetter(){
    const result =  await google.scrape('perrito',1);
    console.log('resultado', result)
}
imgGetter()

// async function scrapeImage(searchQuery) {
//     // Inicia una instancia de Puppeteer
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
  
//     // Navega a la página de búsqueda de imágenes de Google
//     await page.goto(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`);
  
//     // Espera a que aparezcan los resultados de búsqueda
//     await page.waitForSelector('.rg_i');
  
//     // Obtiene el enlace de la primera imagen
//     const imageUrl = await page.evaluate(() => {
//       const firstImage = document.querySelector('.rg_i');
      
//       return firstImage.src;
//     });
  
//     // Cierra el navegador
//     await browser.close();
  
//     // Devuelve la URL de la imagen
//     return imageUrl;
//   }
  
// //   const searchQuery = 'pez'; // Reemplaza con tu cadena de búsqueda
// //   scrapeImage(searchQuery)
// //     .then(imageUrl => {
// //       console.log('URL de la primera imagen:', imageUrl);
// //     })
// //     .catch(error => {
// //       console.error('Error al realizar el web scraping:', error);
// //     });
  











// async function imgWebDisco(artist, album){
//     const browser = await puppeteer.launch({
//         headless:'new'
//     })

//     const page  = await browser.newPage()

//     await page.goto(`https://www.google.cl/search?q=${artist}+${album}&tbm=isch&ved=2ahUKEwivk5GXlsv_AhXcO7kGHe85DDsQ2-cCegQIABAA&oq=green+day+american+i&gs_lcp=CgNpbWcQARgBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoGCAAQCBAeOgQIABAeUJsIWPcUYNgdaABwAHgAgAFgiAH3A5IBAjEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=fBuOZK_lDdz35OUP7_Ow2AM&bih=723&biw=866`)
//     const result = await page.evaluate(()=>{
//         const img = document.querySelector('').innerHTML
//         const data = [...img]
//         return data
//     })

//     console.log(result)

// }





// async function handleDynamicWebPage(){
//     const browser = await puppeteer.launch({
//         headless:'new'
//     })

//     const page = await browser.newPage()

//     await page.goto('https://quotes.toscrape.com')
//     const result = await page.evaluate(()=>{
//         const quotes = document.querySelectorAll('.quote')
//         const data = [...quotes].map(quote=>{
//             const quoteText = quote.querySelector('.text').innerText
//             const author = quote.querySelector('.author').innerText
//             const tags = [...quote.querySelectorAll('.tag')].map(tag=>tag.innerText)
//             return { 
//                 quoteText,
//                 author,
//                 tags
//             }
            
//         })
//         return data
//     })
//     console.log(result) 

//     fs.writeFile('quotes.json',JSON.stringify(result,null,2))
//     await browser.close()
// }

