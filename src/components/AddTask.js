import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' />

            </div>
            <div className='form-control'>
                <label>Day & time</label>
                <input type='text' placeholder='Add day & time' />

            </div>
            <div className='form-control form-control-check'>
                <label>Set reminder?</label>
                <input type='checkbox' placeholder='Add task' />

            </div>
            <input className='btn btn-block' type='submit' value='Save task' />
        </form>
    )
}

export default AddTask
