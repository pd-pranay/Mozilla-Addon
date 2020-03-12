document.getElementById('btn').addEventListener('click',function(){
//   browser.tabs.reload(); 
  browser.runtime.sendMessage({content: "message from the pop up"});
  browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
      document.getElementById('text').innerText=tabs[0].url;

  })
});