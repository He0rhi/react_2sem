import React, {useEffect, useState} from 'react'
import NotesList from "./NotesList";


const Notes = () => {
    const [notes, setNotes] = useState([
    ])

    const [note, setNote] = useState({title: '' , text: '', date: ''})

    const [warning, setWarning] = useState('')

    const addNewNote = (e) => {
        e.preventDefault()
        if(note.title === '')
            alert('Input note title!')
        else {
            setNotes([...notes, {...note }])
            setNote({title: '', text: '', date: ''})
        }
    }

    const deleteFirstNote = (e) => {
        e.preventDefault()
        setNotes(notes.filter((p, index) => index !== 0))
    }

    const deleteLastNote = (e) => {
        e.preventDefault()
        setNotes(notes.filter((p, index) => index !== notes.length - 1))
    }

    useEffect(() => {
        if(notes.length < 8)
            setWarning('')
        else
            setWarning('you have a lot of notes')
    }, [notes])

    return (
        <>
            <form className={'noteForm'} style={{margin:'0px', backgroundColor:'white'}}>
                <h2>БЛАКНОТ</h2>
                <h3 style={{color:'red'}}>{warning}</h3>
                <input style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px'}}
                    className={'noteInput'}
                    type="text"
                    placeholder={'Title'}
                    value={note.title}
                    onChange={e => setNote({...note, title: e.target.value})}
                />
                <input style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px'}}
                    className={'noteInput'}
                    type="text"
                    placeholder={'Description'}
                    value={note.text}
                    onChange={e => setNote({...note, text: e.target.value})}
                />
                <input style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px'}}
                    className={'noteInput'}
                    type="date"
                    placeholder={''}
                    onChange={e => setNote({...note, date: e.target.value})}
                />
                {
                    notes.length > 3 ?
                        <>
                            <button className={'noteBtn'} onClick={deleteFirstNote} style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px', backgroundColor:'white'}}>Delete first</button>
                            <button className={'noteBtn'} onClick={addNewNote} style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px', backgroundColor:'white'}}>New note</button>
                            <button className={'noteBtn'} onClick={deleteLastNote} style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px', backgroundColor:'white'}}>Delete last</button>
                        </>
                        : <button className={'noteBtn'} onClick={addNewNote} style={{borderColor:'grey', borderRadius:'0px', marginLeft:'0px', backgroundColor:'white'}}>New note</button>
                }
            </form>
            <br/>

            <NotesList notes={notes}/>
        </>
    )
}

export default Notes