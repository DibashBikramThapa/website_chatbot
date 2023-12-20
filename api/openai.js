import axios from "axios";

const sendMsg = async (user_data = "", chatLog = []) => {
  if (user_data) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };
    const url = process.env.OPENAI_URL;
    const first_msg = [
      {
        role: "user",
        content: `Always act as An AI consultancy for business setup queries, questions in Dubai.`,
      },
    ];
    const msg = [...first_msg, ...chatLog];
    msg.push({
      role: "user",
      content: `${user_data.content}`,
    });
    const data = {
      model: process.env.GPT_MODEL,
      messages: msg,
    };
    try {
      const response = await axios.post(url, data, { headers: headers });
      if (response.status == 200) {
        return response.data;
      }
    } catch (err) {
      console.log("error", err);
      return { error: err };
    }
  }
};

const queryKnowledgeBase = async (user_data = "", chatLog = []) => {
  if (user_data) {
    const headers = {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    };
    // const url = process.env.OPENAI_URL
    const url = "http://localhost:8000/ai/query";
    // const first_msg= [{
    //             "role": "user",
    //             "content": `Always act as An AI consultancy for business setup queries, questions in Dubai.`
    //         }]
    const msg = [...chatLog];
    msg.push({
      role: "user",
      content: `${user_data.content}`,
    });
    const data = {
      model: process.env.GPT_MODEL,
      messages: msg,
    };
    // const question = chatLog[Last element]
    const question = msg[msg.length - 1];
    try {
      console.log("CALLING API", question.content);
      const response = await axios.post(
        url,
        {
          question: question.content,
        },
        { headers: headers }
      );
      if (response.status == 200) {
        console.log("RESPONSE ", response.data)
        return response.data;
      }
    } catch (err) {
      console.log("error", err);
      return { error: err };
    }
  }
};

export default queryKnowledgeBase;
