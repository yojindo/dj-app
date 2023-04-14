import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set');
  process.exit(1);
}
//configuration of what we are passing into openAI client
const configuration = new Configuration({
  apiKey: openaiApiKey,
});
//create instance of openai client
const openai = new OpenAIApi(configuration);
//export and import this object in our api in order to make the call to openai
export default openai;
