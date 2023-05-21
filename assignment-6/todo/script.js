var todoinput = document.querySelector('input');
var btn = document.querySelector('button');
var todolist = document.querySelector('.todo-list');

// event
btn.onclick = createtodo;
todolist.onclick = PerformActions;

function createtodo(e)
{
    e.preventDefault();
    // console.log("btn click");
    var data = todoinput.value;
    if (data != ""){
       console.log(data);
      
       var newDiv = document.createElement('div')
       newDiv.classList.add("todo")

       var Newli = document.createElement('li')
       Newli.innerHTML = data

       var cmptbtn = document.createElement('button')
       cmptbtn.classList.add('cmptbtn')
       cmptbtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'

       var delbtn = document.createElement('button')
       delbtn.classList.add('delbtn')
       delbtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'



       newDiv.appendChild(Newli)
       newDiv.appendChild(cmptbtn)
       newDiv.appendChild(delbtn)
       todolist.appendChild(newDiv)
       


       todoinput.value = "";

    }
    else
    {
      alert("input fild blank")
    }
}
function  PerformActions (e){
     var item = e.target
    //  console.log(e.target)
   if(item.classList[0]=='cmptbtn')
   {
    // console.log("complate button click")
    var parent = item.parentElement;
    console.log('parent')
    parent.classList.toggle('todo-done')
    var audioTag = document.createElement('audio')
    audioTag.src = "sound1.mp3"
    document.body.appendChild(audioTag)
    audioTag.play();
   }


   if(item.classList[0]=='delbtn')
   {
    // console.log("del button clicked")
    var parent = item.parentElement;
    parent.remove();
    var audioTag1 = document.createElement('audio')
    audioTag1.src = "sound2.mp3"
    document.body.appendChild(audioTag1)
    audioTag1.play();
   }

 }