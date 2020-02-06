function myFunction() {
 document.getElementById("one").innerHTML = "Addition";
}
function multiplication(num){
  for(let i=1; i<=10; i++){
    let a = num*i;
    document.getElementById(i).innerHTML = a;
  }
}
function multiplicationTable(){
  let x = document.getElementById("num").value;
  if(x==0){
    alert("Please Enter a Valid Number.");
  }else{
    multiplication(x);
  }
}
function currentTime(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = timeConverter(h);
  document.getElementById("time").innerHTML = h + ':' + m + ':' + s;
  let t = setTimeout(currentTime, 1000);
}
function timeConverter(hour){
  if(hour < 12){
    document.getElementById('ampm').innerHTML = " am";
  }
  if(hour > 12){
    hour -= 12;
    document.getElementById('ampm').innerHTML = " pm";
  }
  if(hour < 10){
    hour = '0'+hour;
  }
  return hour;
}
function checkTime(val){
    if(val < 10){
      val = '0'+val;
    }
    return val;
}
