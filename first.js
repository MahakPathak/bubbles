document.addEventListener('click' , (event)=>{
    const circle = document.createElement("div");
    circle.className="circle";

    const messages = ["Hey" , "Welcome" , "hello" , "Hey There" , "Hi" , "How Are You"];
    circle.textContent=messages[Math.floor(Math.random()*messages.length)];

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    let color=`rgb(${r} , ${g} , ${b})`;
    circle.style.backgroundColor=color;

    const X = event.clientX;
    const Y = event.clientY;

    circle.style.left = `${X-50}px`;
    circle.style.top = `${Y-50}px`;
    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },5000)
})