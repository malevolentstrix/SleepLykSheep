import React, {useRef} from 'react'
import './Sleepapp.css'

export default function Sleepapp() {
    
    const sleephour = useRef()
    const sleepmin = useRef()

    function handletime(e) {
        const hour = sleephour.current.value
        const minute = sleepmin.current.value
        console.log(hour)
        console.log(minute)
        sleephour.current.value = null
        sleepmin.current.value = null
        return[{hr : hour, min : minute}]
    }
    return (<>
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
                <p><input ref={sleephour} type = "text"/> : <input ref={sleepmin} type = "text"/> <button onClick = {handletime}>Click to Calculate</button></p>
        </div>
         <div>
            <h1>Go to BED now</h1>
            <h3>Calculates the necessary sleep cycles needed if you give the time you will wake up</h3>
            <h3>Please enter the time in HH:MM and click below button</h3>
                <p><input type = "text"/> : <input type = "text"/> <button>Click to Calculate</button></p>
        </div>
        
        
        <div>
            
        </div>
               </>
    )
}
