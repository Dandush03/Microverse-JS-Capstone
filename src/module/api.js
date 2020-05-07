const ApiGet = async (method, userName = null, scores = null) => {
  let settings;
  let url;


  if (method === 'POST') {
    const postData = { user: userName, score: scores };
    url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dl-game/scores/';
    settings = {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } else {
    url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dl-game/scores/';
    settings = { mode: 'cors' };
  }

  let response;

  try {
    response = await fetch(url, settings);
  } catch (e) {
    response = e;
  }
  const data = await response.json();
  return data.result;
};


// eslint-disable-next-line import/prefer-default-export
export default ApiGet;
