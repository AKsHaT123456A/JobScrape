import { Request, Response } from "express";
import fetch from "node-fetch";

export const yourRouteHandler = async (req: Request, res: Response): Promise<void> => {
//   const url = "https://api.myscheme.gov.in/search/v4/schemes?lang=en&q=%5B%7B%22identifier%22%3A%22schemeCategory%22%2C%22value%22%3A%22Social%20welfare%20%26%20Empowerment%22%7D%5D&keyword=&sort=&from=0&size=10";
    const url="https://api.myscheme.gov.in/search/v4/schemes?lang=en&q=%5B%5D&keyword=&sort=&from=0&size=10"
  const myHeaders: HeadersInit = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en;q=0.5",
    Connection: "keep-alive",
    Host: "api.myscheme.gov.in",
    Origin: "https://www.myscheme.gov.in",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    TE: "trailers",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
    "x-api-key": "tYTy5eEhlu9rFjyxuCr7ra7ACp4dv1RH8gWuHTDc"
  };

  const requestOptions: fetch.RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);
  
    if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
    }
  
    const responseData = await response.json();
    
    // Check if responseData.data.facets is an array and not empty
    if (Array.isArray(responseData.data.facets) && responseData.data.facets.length > 0) {
        // Access entries property if it exists
        const fc = responseData.data.facets;
        fc.forEach((element: any) => {
            console.log({ element: element.entries });
        });
        console.log(responseData.data.facets[0].entries);
    } else {
        console.error("No facets data found");
    }
    } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
}
}

export default yourRouteHandler;
