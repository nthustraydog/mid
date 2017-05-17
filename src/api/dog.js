import axios from 'axios';

const postBaseUrl = 'http://localhost:8080/api';


export function getDog(dogID = '') {
  //  console.log(dogID);
    let url = `${postBaseUrl}/dogs`;
    if (dogID)
        url += `?dogID=${dogID}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data[0];
    });
}

export function sendmail(name,mail,date,time,dogname,comment){
  let url = `${postBaseUrl}/mails`;
  console.log(`Making mail request to: ${url}`);

  return axios.post(url,{
    name,
    mail,
    date,
    time,
    dogname,
    comment
  }).then(function(res){
    if(res.status != 200)
      throw new Error(`Unexpected response code: ${res.status}`);
  });
}

export function sendtell(name,mail,text,file){
  let url = `${postBaseUrl}/texts`;
  console.log(`Making text request to: ${url}`);


  return axios.post(url,{
    name,
    mail,
    text,
  }).then(function(res){
    if(res.status != 200)
      throw new Error(`Unexpected response code: ${res.status}`);
  });
}
