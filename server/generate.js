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
        content: `I want you to act as a DJ and provide me a response of a 5 songs. I want the title and artist with BPM, key, and genre. 
        I am looking for the best song to mix with for:
        "Animals" by Martin Garrix
        
        Here are the must have criterias you must follow:
        1. BPM range can be lower or greater by the value of 5.
        2. The key must be the same as the song I inputted
        3. The genre must be the same as the song I inputted
        4. The artist must be different.
        
        Please list this out in a table format.
        `,
      },
      {
        role: 'assistant',
        content: `
            
            \n\n
            title: 'Tremor',
            artist: 'Dimitri Vegas, Martin Garrix, Like Mike',
            bpm: 128,
            key: 'F# minor',
            genre: 'Big Room',
   
            \n\n
            title: 'Bad',
            artist: 'David Guetta & Showtek ft. VASSY',
            bpm: 128,
            key: 'G minor',
            genre: 'Electro House',
       
            \n\n
            title: 'Spaceman',
            artist: 'Hardwell',
            bpm: 130,
            key: 'C minor',
            genre: 'Progressive House',
       
            \n\n
            title: 'Apollo',
            artist: 'Hardwell ft. Amba Shepherd',
            bpm: 128,
            key: 'D# minor',
            genre: 'Progressive House',
       
            \n\n
            title: 'LRAD',
            artist: 'Knife Party',
            bpm: 128,
            key: 'A minor',
            genre: 'Electro House',
      
            
          
        `,
      },
      {
        role: 'user',
        content: `I want you to act as a DJ and provide me a response of a 5 songs. I want the title and artist with BPM, key, and genre 
        I am looking for the best song to mix with for:
        \n\n${song}
        
        Here are the must have criterias you must follow:
        1. BPM range can be lower or greater by the value of 5.
        2. The key must be the same as the song I inputted
        3. The genre must be the same as the song I inputted
        4. The artist must be different.
        
        Please list this out in a table format.`,
      },
    ];
    const response = await openaiClient.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });
    console.log('response', response);
    return response.data.choices[0].message.content;
  };

  return await chatGptApi(song);
};

export default generate;
