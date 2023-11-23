import axios from 'axios';

const sendMsg = async(user_date='', user_data='', chatLog=[])=>{
    if(user_data){
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        }
        const url = process.env.OPENAI_URL
        // const first_msg= [{
        //             "role": "user",
        //             "content": `Act as numerologist in this chat for birthdate: ${user_date}`
        //         }]
        // const msg = [...first_msg, ...chatLog]
        const msg = chatLog
        msg.push({
                "role": "user",
                "content": `${user_data.content}`
            })
        const data = {
            "model": process.env.GPT_MODEL,
            "messages": msg,
        }
        try{
            console.log("🚀 ~ file: openai.js:27 ~ sendMsg ~ url, data, {headers: headers:", url, data, {headers: headers})
            const response = await axios.post(url, data, {headers: headers})
            if(response.status==200){
                console.log('response data', response.data)
                return response.data
            }
        }catch(err){
            console.log('error', err)
        }
    }
}

export default sendMsg