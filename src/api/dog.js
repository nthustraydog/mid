import axios from 'axios';

const postBaseUrl = 'http://localhost:8080/api';
//const postBaseUrl = 'http://nthustraydog.us-west-2.elasticbeanstalk.com/api';


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

export function createPost(barkerId, title, body) {
    const url = `${postBaseUrl}/forum/post`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        barkerId,
        title,
        body
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function createResponse(barkerId, postId, text) {
    const url = `${postBaseUrl}/forum/response`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        barkerId,
        postId,
        text
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}


export function getForum(forumId) {
    let url = `${postBaseUrl}/forum` + `?forumId=${forumId}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

export function getPost(postId) {
    let url = `${postBaseUrl}/forum/post` + `?postId=${postId}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
