// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json("https://restcountries.eu/rest/v2/all");
  console.log(res);
}
