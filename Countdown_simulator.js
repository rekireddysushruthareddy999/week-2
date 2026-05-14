/* 2.OTP Countdown Simulator (Console App) 
 Simulate OTP sending flow in Node.js: 
 Show “OTP Sent Successfully” 
 Start 10-second countdown
  Allow resend only after countdown ends
  console.log("OTP sent successfully")*/
  console.log("i'll send money")
let c=true
const o=new Promise((resolve,reject)=>{
setTimeout(()=>{
if(c===true){
resolve("received!")
}else{
reject("send tomorrow")
}
},1000)
})
o.then((message)=>{console.log(message)})
.catch((message)=>{console.log(message)})