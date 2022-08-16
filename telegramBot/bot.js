import axios from "axios";
import {botToken, channelId, onlineMessageText, telegramApi} from "./constant/botconstant.js";

export async function telegramBot(){
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    while (true){
        try {
            const fullUrl = `${telegramApi}bot${botToken}/sendMessage?chat_id=${channelId}&text=${onlineMessageText}`
            await axios.get(fullUrl);
            await delay(300000)
        } catch (e){
            console.log("error =>" + e)
        }
    }
}