const endDate = "28 April 2024 12:01 AM"

document.getElementById("end-date").innerText = endDate
const inputs =document.querySelectorAll("input")

function colck(){
   const end = new Date(endDate)
   const now = new Date()
   const diffrent = (end - now) / 1000;

   if(diffrent < 0)return

   inputs[0].value = Math.floor(diffrent /3600  / 24); //convert days
   inputs[1].value = Math.floor(diffrent /3600) % 24;//conver hours
   inputs[2].value = Math.floor((diffrent /60) % 60);
   inputs[3].value = Math.floor(diffrent) % 60;
}
colck()


// 1 day = hrs
// 1 hr  =  60Mins
// 60min =  3600 sec

setInterval(
    () => {
        colck()
    },1000
)