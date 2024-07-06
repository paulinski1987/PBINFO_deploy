// @ts-nocheck
import { env } from "$env/dynamic/public";
import { MailtrapClient } from "mailtrap";

export function email(NAME, EMAIL, PHONE, DESC){
  const TOKEN = env.TOKEN;
  const ENDPOINT = env.ENDPOINT;
  const RECV = env.RECV;
  const DATE = new Date();

  const MAILBODY = `${DATE}\nName: ${NAME}\nEmail: ${EMAIL}\nPhone: ${PHONE}\n\nDescription:${DESC}`

  const client = new MailtrapClient({
    endpoint: ENDPOINT,
    token: TOKEN
  });

  const sender = {
    email: "noreply@paulbanks.info",
    name: "Paul Banks"
  };

  const recipients = [
    { email: RECV }
  ];

  client.send({
    from: sender,
    to: recipients,
    subject: "Service Request",
    text: MAILBODY,
    category: "Service Request"
  }).then(() => {
    NAME = ""; EMAIL = ""; PHONE = ""; DESC = "";
  }, () => {
    alert("There was an issue with your request");
    console.error });}
