import React from 'react';

const SafeGuardingDisplay = (reachEvents) => {
    console.log('test', reachEvents)
    return reachEvents.map((userEvents) => {
        const {displayName} = userEvents[0].creator;
        return (
            <div>
                <h1>{displayName}</h1>
                {
                    userEvents.map(event => {        
            return(<div>
                <h2>Time - {JSON.stringify(event.start)}</h2>
                <h2>Meeting - {JSON.stringify(event.title)}</h2>
                <p>Details - {event.description}</p>
                <p>Location - {event.location}</p>
            </div>)
                }
                ) 
                }
        </div>
        )
    })
}

export default SafeGuardingDisplay;