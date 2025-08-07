import React from 'react'
export default function AttributeDemo(){
    return(
        <div>
            <input
            type="text"
            placeholder="type here..."
            maxLength={20}
            disabled={false}
            />
            <label htmlFor="nameinput" className="label">
            Name:
            </label>
            <input id="nameinput" type="text"/>
        </div>
    )
}