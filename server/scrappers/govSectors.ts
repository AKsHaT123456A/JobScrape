import puppeteer from "puppeteer";
import cheerio from "cheerio";

interface SectorData {
  sector: string;
  data: string[];
}
export default async function sectorScaping() {
  console.info("sectorScaping stating");
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto("https://www.investindia.gov.in/sectors");

  const html = await page.content();
  await browser.close();
  console.info("browser closed");
  const $ = cheerio.load(html);
  console.info("browser loaded");
  // console.log($.html());
  // const data = $("a").map((_, element) => {
  //     const href = $(element).attr("href");
  //     const text = $(element).text();
  //     if(href && href.startsWith("/sector") && !text.includes("VISIT SECTOR"))
  //     return {href,text
  //     } // Get the href attribute value
  // }).get().filter(Boolean);

  // console.log(data);
  let sectors: Set<SectorData> = new Set();

$(".listing-title-wrapper").each((_, element) => {
  const sectorName = $(element).children("h3").first().text().trim();

  const data: string[] = [];
  $(element)
    .find("div.inner")
    .each((_, stat) => {
      $(stat).each((_, statName) => {
        const text = $(statName).text();
        const include = text.includes("GDP");
        if (include) data.push(text);
      });
    });

  // Only add to the sectors set if data.length > 0
  if (data.length > 0) sectors.add({ sector: sectorName, data });
});

console.log(Array.from(sectors));
}
