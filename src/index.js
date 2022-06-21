console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener('DOMContentLoaded',()=>{
fetch(imgUrl)
.then(response=>response.json())
.then(data =>{
    for(const item of data.message){
    let img=document.createElement('img');
    img.src = item;
    document.querySelector('#dog-image-container').appendChild(img);
    };
})
.catch(error=>console.log(error))


fetch(breedUrl)
.then(response =>response.json())
.then(data=>{
    for(const key in data.message){
     const newBreed = document.createElement('li')
     newBreed.innerText = key;
     document.querySelector('#dog-breeds').appendChild(newBreed);
     newBreed.addEventListener('click',()=>{
         newBreed.style.color = 'purple';
     });
    }
})
.catch(error=>console.log(error))
});

document.getElementById('breed-dropdown').addEventListener('change',filtererFunction)
function filtererFunction(event){
    const filterLetter = event.target.value;
    const breedList= Array.from(document.querySelector('#dog-breeds').querySelectorAll('li')); //Get all the lists of the  breeds and
    breedList.forEach(list=>{
      if(list.textContent.charAt(0)!== filterLetter) list.style.display = 'none';
    })
}