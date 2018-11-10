import React from 'react';
const MentorHomeEvents = ({upcomingEvents, numberOfEventsAttended}) => {
    return(
        <div>
            <h1></h1>
            Attendance {numberOfEventsAttended}
            <div class="upcoming_events">
                {upcomingEvents.map((event, i)=> {
                return(
                    <div class="upcoming_event">
                        <a  href={`/meeting/${event.id}`} key={i}>
                        <h3 id="event_title">{event.title}</h3>
                        <p id="event_description">{event.description}</p>   
                    </a>
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}

export default MentorHomeEvents