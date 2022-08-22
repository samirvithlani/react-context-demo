import React, { useContext } from 'react'
import { AppContext } from '../context';
import { useForm} from 'react-hook-form';

export const AddUser = () => {


    const {dispacthUserEvent} = useContext(AppContext);
    const {register, handleSubmit} = useForm();
    const submit = (data)=>{

        dispacthUserEvent('ADD_USER', data);

    }
  return (
    <div>
            <form onSubmit={handleSubmit(submit)}>
                <input name="name" {...register("name")}/>
                <input name="age" {...register("age")}/>
                <button type="submit">Submit</button>

            </form>

    </div>
  )
}
