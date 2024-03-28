import { Request, Response } from "express";
import fetch from "node-fetch";

export const encode = async (req: Request, res: Response,pageNo?:number): Promise<void> => {
    pageNo=pageNo || 0;
  const myHeaders: HeadersInit = {
    Host: "www.naukri.com",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
    Accept: "application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    Referer:
      "https://www.naukri.com/jobapi/v3/search?noOfResults=100&urlType=search_by_keyword&searchType=adv&keyword=search&pageNo=1&seoKey=search-jobs&src=seo_srp&latLong=",
    clientid: "d3skt0p",
    appid: "109",
    systemid: "Naukri",
    "Content-Type": "application/json",
    gid: "LOCATION,INDUSTRY,EDUCATION,FAREA_ROLE",
    Connection: "keep-alive",
    Cookie:
      "_t_ds=b4e71c41706960526-11b4e71c4-0b4e71c4; jd=160124004035; test=naukri.com; symfony=a066d132b25cc4536358c45b7656f957; page_visit=1; dfp=836920e5c95291468e84b53319a0789d; _did=dc8c459883; test=naukri.com; bs_rnd=R03bb59R; _odur=b2a496c6d3; f56427ef477cf38980362fe231702af21s7=v0%7CO1TX0HaVKIgDLWBcetHWikmzJqZe91%2BRy7GUj68E1b%2BU65g0%2BLT7ShH1AWx8D8I6crhtynQuQP%2FMNFg92UDZ4pJonrQP0FSv4oKKeeJf%2BMrs7ujNAixZDMifvPDqeLxI%2BGCIR5Su4QRGeYX037qNUX%2B51g6FOSf5u7zKLD27oHg%3D; ak_bmsc=CF30D8D806EA94DF07A625EF73279B31~000000000000000000000000000000~YAAQrwVaaN46wj6OAQAAiIqmRxdOMKjJmECnQWqTFTk3YkM1+/g4gxlPYNx+KIo83OcCLpKGYc+9ak1zRdKGsrGWKp5ecalKzk+YUjFsZ4iDkXu0W+dHZYVG6v+vJR0RhNtshrsCr1DdOVR0jtmM7gPbbhZir3vFWUvokanlRC7C763CoQvsHNIDOc29bcK8h6PTbFjLCk+796eU3mcYlihp1QtsCfx3bcx70PknyT300wUff74sLE3jiMsIb84jqIqVA+bllhg4Wvw9xrfU8gLSvoLFmW3eKaaWrE/UmIubb8u3YHIt+i6TdVhhHwchY1UArx4R1bH60FWbM6NtLKKVOnY9nPirTIMFr5XvC9un+GpmCvdPQU6UoiIJFUzTG5TEj+c9Q/P8lR+Q4QyTwpzBlGnr+o1m5OS2uv+15v9pXwrvHE6+USwyIZCApA==; bm_sv=BFA66DFD8C53CC02A900AB5467B961DA~YAAQrwVaaEEuwj6OAQAA5MqkRxeveLh49F0AjtjmXDnfEjjJ0T+H9wjaDilftpXCLqG1R+Z3A3p4bsX54Y3Fv8/3fC0B9SDsHl2zmz+ZJJtYMNZeg0S8vb5XmDYnok5yj4p2EN6zBAkx/28BiSgIPI4NNuI+NyfGX+84YSwhZvRAuMF25MBvN+NZG9wCGE1WvSaaU/uz3Jk7MNjcfupD8nVNn4o3+Q2MGSlmkl9V5v4CDTGXI5k9qGKhS2Jx9XJCeg==~1; bm_mi=3741EA5F15C2B01B87740D3DA2C8A38B~YAAQrwVaaMstwj6OAQAAmsCkRxdxoryyGNvkkWnevFw+gBzRSRC1QBOoa3krqXtLNpokf0KE1mpN/eN03LZhX9QXmSKaqk1MEGlsJOtLaOnEuZbvd61xTIy9EabuA6+kDBaKl6JuL9uTrH+ni3mBNYxhyuMNi1uGQv7ZtQ9OAX3T5hzaq3g647iP3mTwqT+/w32nEiX21hbCPRfXg+6/WxxhSGv2nQnH1wW+vJ1oDXq3bro12ViuiFmmTWb/+xTLD1BxQkjrat7lk9VIMHWKnSD4exo/ntKdoJfFgPcTO7a5+ZnU7bKCgdF1Z3G0FGvFAkuJiYeOUjtAfiX8tw==~1; _t_ds=19bccde71710591579-8919bccde7-019bccde7",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
  };

  const requestOptions: fetch.RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://www.naukri.com/jobapi/v3/search?noOfResults=100&urlType=search_by_location&searchType=adv&location=india&pageNo=${pageNo}&functionAreaIdGid=5&functionAreaIdGid=5&clusters=functionalAreaGid&seoKey=jobs-in-india&src=directSearch&latLong=`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);
    // Do something with the result, e.g., send it as a response or process it further
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors here
  }
};

export default encode;
