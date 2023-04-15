import openaiClient from './api.js';

const generate = async (song) => {
  const response = await openaiClient.createCompletion({
    model: 'text-davinci-003',
    prompt: `I want you to act as a DJ and provide me a response of a song title and artist with BPM, key, and genre 
    as well as why it is a good transition song 
    I am looking for the best song to mix with for:
    \n\n${song}
    
    Here are the must have criterias you must follow:
    1. BPM range can be lower or greater by the value of 5.
    2. The key must be the same as the song I inputted
    3. The genre must be the same as the song I inputted
    4. The artist must be different.`,
    max_tokens: 500,
    temperature: 1,
  });
  console.log('here res', response);
  return response.data.choices[0].text;
};

export default generate;
