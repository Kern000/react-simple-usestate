import React from 'react';
import {useState} from 'react';

export default function Calculator(){

    const [formState, setFormState] = useState({
        'weight': 0,
        'height': 0,
        'BMI': null
    })

    const updateFormField = (event) => {
        setFormState(
            {...formState,
                [event.target.name]: event.target.value
            }
        )
    }

    const calculateBMI = () => {
        return (
            setFormState(
                {...formState,
                    'BMI': (formState.weight / (formState.height * formState.height))
                }
            )
        )
    }

    return(
        <React.Fragment>
            <div>
                <label> Weight </label>
                <input  type="text"
                        className="form-control"
                        name="weight"
                        value={formState.weight}
                        onChange={updateFormField}
                />
            </div>
            <div>
                <label> height </label>
                <input  type="text"
                        name="height"
                        className="form-control"
                        value={formState.height}
                        onChange={updateFormField}
                />
            </div>
            <button className="btn btn-danger"
                    onClick={calculateBMI}
            >
             Calculate 
            </button>
            <div>
                <p>BMI: {formState.BMI}</p>
            </div>
        </React.Fragment>
    )
}


// ...formState is to create a shallow copy of the state, then update the specific [event.target.name]:event.target.value
