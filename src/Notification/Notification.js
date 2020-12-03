import React from 'react';
import {Description} from './NotificationStyledComponent'

export default function Notification({message}) {
    return (
        <Description>
            {message}
        </Description>
    )
}

