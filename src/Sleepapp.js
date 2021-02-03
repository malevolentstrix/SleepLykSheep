import React, {useRef, useState} from 'react'
import './Sleepapp.css'

export default function Sleepapp() {
    
    const sleephourRef = useRef()
    const sleepminRef = useRef()

    const [sleephour, setSleephour] = useState(0)
    const [sleepmin, setSleepmin] = useState(0)

    const [sleephour2, setSleephour2] = useState(0)
    const [sleepmin2, setSleepmin2] = useState(0)

    const [sleephour3, setSleephour3] = useState(0)
    const [sleepmin3, setSleepmin3] = useState(0)

    const [sleephour4, setSleephour4] = useState(0)
    const [sleepmin4, setSleepmin4] = useState(0)

    function handletime(e) {
        const hour = sleephourRef.current.value
        const minute = sleepminRef.current.value
        console.log(hour)
        console.log(minute)
        sleephourRef.current.value = null
        sleepminRef.current.value = null

        var tymmin = Number(minute)+30
        var tymhour = Number(hour)+1

        var tymmin2 = Number(minute)
        var tymhour2 = Number(hour)+3

        var tymmin3 = Number(minute)+30
        var tymhour3 = Number(hour)+4

        var tymmin4 = Number(minute)
        var tymhour4 = Number(hour)+6

        while(tymmin >=60 || tymhour >=24)
        {
            if(tymmin>=60)
        {
            tymhour = tymhour+1;
            tymmin = tymmin-60;
            console.log(tymmin)
        }
            if(tymhour>=24)
        {
            tymhour = tymhour-24;
            console.log(tymhour)
        }
        }

        while(tymmin2 >=60 || tymhour2 >=24)
        {
            if(tymmin2>=60)
        {
            tymhour2 = tymhour2+1;
            tymmin2 = tymmin2-60;
            console.log(tymmin2)
        }
            if(tymhour2>=24)
        {
            tymhour2 = tymhour2-24;
            console.log(tymhour2)
        }
        }

        while(tymmin3 >=60 || tymhour3 >=24)
        {
            if(tymmin>=60)
        {
            tymhour3 = tymhour3+1;
            tymmin3 = tymmin3-60;
            console.log(tymmin3)
        }
            if(tymhour>=24)
        {
            tymhour3 = tymhour3-24;
            console.log(tymhour3)
        }
        }

        while(tymmin4 >=60 || tymhour4 >=24)
        {
            if(tymmin4>=60)
        {
            tymhour4 = tymhour4+1;
            tymmin4 = tymmin4-60;
            console.log(tymmin4)
        }
            if(tymhour4>=24)
        {
            tymhour4 = tymhour4-24;
            console.log(tymhour4)
        }
        }
    setSleepmin(s => s + tymmin)
    setSleephour(h => h + tymhour)
    setSleepmin2(p => p + tymmin2)
    setSleephour2(q => q + tymhour2)
    setSleepmin3(k => k + tymmin3)
    setSleephour3(l => l + tymhour3)
    setSleepmin4(i => i + tymmin4)
    setSleephour4(j => j + tymhour4)
    }
    return (<div>

        <div>
       
            <h1>Go to BED now</h1>
            <h3>Calculate the necessary sleep cycles if you lie down now</h3>
            <h3>Please click the below button</h3>
                <button>Click to Calculate</button>
        </div>
        <div>
            <h1>What time to wake up?</h1>
            <h3>Calculates the necessary sleep cycles needed if you give the time you will go to bed</h3>
            <h3>Please enter the time in HH:MM and click the below button</h3>
                <p><input ref={sleephourRef} type = "text"/> : <input ref={sleepminRef} type = "text"/> <button onClick = {handletime}>Click to Calculate</button></p>
        </div>
        <div>
        <h2>You are expected to wake up at</h2>
    	<h1>{sleephour}:{sleepmin} (1 Sleep Cycle) or</h1> <h1>{sleephour2}:{sleepmin2} (2 Sleep Cycles) or</h1>
        <h1>{sleephour3}:{sleepmin3} (3 Sleep Cycle) or</h1> <h1>{sleephour4}:{sleepmin4} (4 Sleep Cycles)</h1>
    	</div>

               </div>
    )
}