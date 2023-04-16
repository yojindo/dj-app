import openaiClient from './api.js';

const generate = async (song) => {
  const chatGptApi = async (song) => {
    const messages = [
      {
        role: 'system',
        content:
          'You are a DJ that recommends the best song based on required criteria.',
      },
      {
        role: 'user',
        content: `I want you to act as a DJ and provide me a response of a song title and artist with BPM, key, and genre 
        as well as why it is a good transition song 
        I am looking for the best song to mix with for:
        \n\nlevels by avicii
        
        Here are the must have criterias you must follow:
        1. BPM range can be lower or greater by the value of 5.
        2. The key must be the same as the song I inputted
        3. The genre must be the same as the song I inputted
        4. The artist must be different.`,
      },
      {
        role: 'assistant',
        content: `Song title: "Reload"
      Artist: Sebastian Ingrosso & Tommy Trash ft. John Martin
      BPM: 126
      Key: C# minor
      Genre: Progressive House`,
      },
      {
        role: 'user',
        content: `I want you to act as a DJ and provide me a response of a song title and artist with BPM, key, and genre 
      as well as why it is a good transition song 
      I am looking for the best song to mix with for:
      \n\n${song}
      
      Here are the must have criterias you must follow:
      1. BPM range can be lower or greater by the value of 5.
      2. The key must be the same as the song I inputted
      3. The genre must be the same as the song I inputted
      4. The artist must be different.
      
      Do not provide any other description`,
      },
    ];
    const response = await openaiClient.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });
    return response.data.choices[0].message.content;
  };

  return await chatGptApi(song);
};

export default generate;
