//console.log(document.getElementById("hobby"));
 let hobbies = document.getElementById("hobby");
 fetch('http://localhost:1234/hobbies',
      ).then(res => res.json())
        .then(status =>{
          console.log(status);
          for(let i=0;i<status.length;i++){
          hobbies.innerHTML += '<option>'+ status[i] +'</option>'
          }
        })

const selectValue = document.getElementById('country')

selectValue.addEventListener('change', (event) => {
          
        console.log(event.target.value)
        let countryVal = event.target.value;
        console.log(countryVal)
        let datas = {
             option : countryVal
          }
        fetch('http://localhost:1234/country',{
        method : 'POST',
        body: JSON.stringify(datas),
        headers:{
          'Content-Type': 'application/json'
        }
       }).then(data => data.json())
        .then(resp => {
          document.getElementById('city').innerHTML = ""
          console.log(resp.countrys)
          console.log(resp.countrys.length)
          for (let j = 0;j<resp.countrys.length;j++){
              document.getElementById('city').innerHTML+='<option>'+ resp.countrys[j] +'</option>'
          }
        })
        })

      