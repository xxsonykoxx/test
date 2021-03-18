let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];


  
  let travelInfo='';
  let travelNum=0;
  const list = document.querySelector('ul');
  const searchLocation=document.querySelector('.searchArea select');
  const showSearchNum=document.querySelector('.searchArea p');
  const addBtn=document.querySelector('.btn');
  const travelName=document.querySelector('.travelName');
  const travelImg=document.querySelector('.travelImg');
  const travelLocation=document.querySelector('.travelLocation');
  const travelPrice=document.querySelector('.travelPrice');
  const travelLevel=document.querySelector('.travelLevel');
  const travelGroup=document.querySelector('.travelGroup');
  const travelText=document.querySelector('.travelText');

showTravelInfo(data);
//   function showCard(){
//     travelInfo+=
//     `
//     <li>
//     <span class="location">${item.area}</span>
//     <span class="starlevel">${item.rate}</span>
//     <img src="${item.imgUrl}"alt="">
//     <div class="travelDescription">
//         <h2>${item.name}</h2>
//         <p>${item.description}</p>
//         <div class="travelCost">
//             <span><i class="fas fa-exclamation-circle"></i>剩下最後 ${item.group} 組</span>
//             <p>TWD<span>${item.price}</span></p>
//         </div>
//     </div>
// </li>
//     `
// }


  //新增套票
  addBtn.addEventListener('click',function(){
    if(searchLocation.value==''||travelName.value==''||travelImg.value==''||travelLocation.value==''
    ||travelPrice.value==''||travelLevel.value==''||travelGroup.value==''||travelText.value==''){
        alert('請確實填寫所有欄位');
        
    }
    else if(travelLevel.value>10||travelLevel.value<1){
        alert('套票星級必須在1~10之間');
    }else{
      let obj={};
      obj.id=data.length;
      obj.name=travelName.value;
      obj.imgUrl=travelImg.value;
      obj.area=travelLocation.value;
      obj.description=travelText.value;
      obj.group=travelGroup.value;
      obj.price=travelPrice.value;
      obj.rate=travelLevel.value;
      data.push(obj);
      showTravelInfo();
      showSearchNum.textContent=``;
      searchLocation.value="地區搜尋";
      travelName.value='';
      travelImg.value='';
      travelLocation.value='選擇景點地區';
      travelText.value='';
      travelGroup.value='';
      travelPrice.value='';
      travelLevel.value='';
    }
  })


  /* 渲染函式， 參數為要渲染的陣列。 */
  function showTravelInfo(data){
  travelInfo='';
  data.forEach(function(item){
    travelInfo+=
    `
    <li>
    <span class="location">${item.area}</span>
    <span class="starlevel">${item.rate}</span>
    <img src="${item.imgUrl}"alt="">
    <div class="travelDescription">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div class="travelCost">
            <span><i class="fas fa-exclamation-circle"></i>剩下最後 ${item.group} 組</span>
            <p>TWD<span>${item.price}</span></p>
        </div>
    </div>
</li>
    `
  })
  list.innerHTML=travelInfo;
  showSearchNum.textContent=`本次搜尋共 ${data.length} 筆資料`; /* 直接取陣列長度 */
}


//搜尋套票
searchLocation.addEventListener('change',function(e){
    /* 建立一個篩選後要 push 進去的陣列 */
    let areaFilter = [];
    data.forEach(function(item,index){
        if(e.target.value==item.area){
          /* 篩選完， 將物件塞入陣列 */
            areaFilter.push(item);
            showTravelInfo(areaFilter);  /* 渲染函式（ 參數：篩選完的陣列 ） */
    }
    else if(e.target.value=="全部地區"){
      showTravelInfo(data);  /* 如果是全部地區， 就代入未篩選的 data */
    }
  })
   list.innerHTML=travelInfo;
})








