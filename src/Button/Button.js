import React from 'react'
import {ButtonFeedback} from './ButtonStyledComponent'

export default function Button({ name, callBack}) {
    return (
    <ButtonFeedback name = {name} type="button" onClick = {callBack}>{name}</ButtonFeedback>
    )
}
