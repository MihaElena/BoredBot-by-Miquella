

document.getElementById("get-activity").addEventListener("click" , function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.getElementById("activity").textContent = data.activity

        document.getElementById("title").textContent = "Yeyyyy!! Let's do this!"

        document.getElementById('ding').play();

        // Body changes color
        document.querySelector("main").classList.add("happy")
        document.getElementById("title").classList.add("exciting")
        document.getElementById("span1").classList.add("hop")
        document.getElementById("span2").classList.add("hop")
        document.getElementById("activity").classList.add("exciting2")

        document.getElementById('emoji').style.display = 'block';
        for (let i = 0; i < 5; i++) {
            const burst = document.createElement('div');
            burst.textContent = ['🎉','🌟','🔥','😄','💃'][i % 5];
            burst.className = 'emoji-burst';
            burst.style.left = `${Math.random() * 100}%`;
            burst.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(burst);
            setTimeout(() => burst.remove(), 2000);
          }


    })
})


/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/
