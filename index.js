const aploud = document.querySelector("#upload")
aploud.addEventListener("change", (e)=>{
	const reader = new FileReader()
	const csv = e.target.files[0];
	reader.readAsText(csv)
	reader.onload = function (e) {
		let student = e.target.result;
        let allData = convertCsvDataToObject(student);
        let red=bubblesort(allData,"first_name");
        console.log(red);
	} 

})

 const convertCsvDataToObject=(data)=>{
    data = data.split("\n")
    let objects=[]
    let header = data[0].split(",")
    for(let i = 1; i < data.length-1; i++){
        let record = data[i].split(",")
        const object = {};
        for(let j = 0;j < record.length; j++)
        object[header[j]] = record[j]
        objects.push(object)

    }
    return objects
}

const bubblesort = (list = [],by)=>{
    for(let outer = list.length-1 ; outer > 0; outer--){
        for(let i = 0; i < outer ; i ++){
            if(list[outer][by] > list[i][by]){
                let temp = list[outer];
                list[outer] = list[i]
                list[i] = temp;

            }
		}
        }
        return list
}

const selectionSort = (list=[],by) => {
    for (let i = 0; i < list.length-1; i++) {
        let smallestvalue = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j][by] < list[smallestvalue][by]) {
                smallestvalue = j;
            }
        }
            let temp = list[i];
            list[i] = list[smallestvalue];
            list[smallestvalue] = temp;
        }

	return list;

 }

const linearsearch=(list=[],key,item)=>{
  let cach=[]
    for(let read=0;read<list.length-1;read++){
    if (list[read][key]==item) 
      cach.push(list[read])
    }
    return cach;
    }
const feePerMonth=(list=[],by)=>{
 let sum=0;
   for(let fee=0;fee<list.length;fee++)
     sum += list[fee][by]    

        return sum; 
 }


const groupby=(list=[],by)=>{
  let result=[]
  let main=[]
  for(let outer= list.length-1; outer >= 0 ; outer--)
   for(let iner = 0; iner<outer; iner++){  
      if (list[outer].age == list[iner].age) {
        result.push(list[outer],list[iner])
        
      }
    }
    
  return result;
}

//  i didn't complete i will tomorrow i.a.
    
    

