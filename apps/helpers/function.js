export function getRandomArray(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getQueryUrl(url, userQuery) {
  //construct a new url
  let res = new URL(url);
  //check if userquery contians properties
  if (Object.keys(userQuery).length !== 0) {
    //loop through object
    let ind = 0;
    while (ind < Object.keys(userQuery).length) {
      //get the parameter
      const param = Object.keys(userQuery)[ind];
      //get the value
      const value = userQuery[param];
      //set or replace the parameter
      res.searchParams.set(param, value);
      //increment counter
      ind++;
    }
  }
  //return the full URL
  return res.href;
}
