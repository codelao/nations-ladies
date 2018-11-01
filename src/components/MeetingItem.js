import React from 'react';
import Dropzone from 'react-dropzone'
import { Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import {formatDateForDisplay} from '../functions/utils'

const MeetingItem = (event, handleCheck, attending, onDrop, upload, files) => {
    console.log('event',event);
    const {title, end, start} = event
    return (
        <div>
    Meeting Description -- {title}
    <br></br>
    Meeting Times {formatDateForDisplay(start, end)}
    <br/>
    <ToggleButtonGroup id="togglebutton" type="radio" name="response" onChange={handleCheck} value={attending} bsSize="large" defaultValue="no">
        <ToggleButton  value="yes">Attending</ToggleButton>
        <ToggleButton  value="no">Not Attending</ToggleButton>
    </ToggleButtonGroup>
    <br/>
    <Button bsStyle="primary">Update</Button>
    <Dropzone onDrop={onDrop}>
<p>Try dropping some files here, or click to select files to upload, to upload minutes.</p>
</Dropzone>
    <Button id="togglebutton" onClick={upload}>File Upload</Button>
    <aside>
<h2>Dropped files</h2>
<ul>
{
    files.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
}
</ul>
</aside>
</div>
    )
}

export default MeetingItem