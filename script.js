document.addEventListener(('DOMContentLoaded'),async()=>{
    let dailyBtn = document.querySelector('#daily');
    let weeklyBtn = document.querySelector('#weekly');
    let monthlyBtn = document.querySelector('#monthly');
    let req = await fetch ('data.json');
    let data = await req.json();
    let containers = document.querySelectorAll('main section:not(.section1)');    
    dailyBtn.addEventListener(('click'), updateDaily);
    weeklyBtn.addEventListener(('click'),updateWeekly);
    monthlyBtn.addEventListener(('click'),updateMonthly);
    
    function updateDaily()
    {
        containers.forEach((container)=>{
            let titleHTML = container.dataset.title;
           let doesItContain = data.find((element)=>element.title===titleHTML);
           if(!doesItContain) return;           
           let currentHours = container.querySelector('.heading');
           let previousHours = container.querySelector('.paragraph-wrap');           
            currentHours.innerHTML=`${doesItContain.timeframes.daily.current}hrs`;
            previousHours.innerHTML=`Yesterday - ${doesItContain.timeframes.daily.previous} hrs`;
        })
    }
    function updateWeekly()
    {
        containers.forEach((container)=>{
        let titleHTML = container.dataset.title;
        let doesItContain = data.find((item)=>item.title === titleHTML);
        if(!doesItContain) return;
        let currentHours = container.querySelector('.heading');
        let previousHours = container.querySelector('.paragraph-wrap');   
        currentHours.innerHTML=`${doesItContain.timeframes.weekly.current}hrs`;
        previousHours.innerHTML=`Last week - ${doesItContain.timeframes.weekly.previous} hrs`;
        })
    }
    function updateMonthly()
    {
        containers.forEach((container)=>{
        let titleHTML = container.dataset.title;
        let doesItContain = data.find((element)=>element.title ===titleHTML);
        if(!doesItContain) return;
        let currentHours = container.querySelector('.heading');
        let previousHours = container.querySelector('.paragraph-wrap');   
        currentHours.innerHTML=`${doesItContain.timeframes.monthly.current}hrs`;
        previousHours.innerHTML=`Last month - ${doesItContain.timeframes.monthly.previous} hrs`;
        })
    }

})
