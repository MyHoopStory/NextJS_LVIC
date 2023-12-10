"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


export default function NewProject (){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

      console.log(watch("siteName")) // watch input value by passing the name of it
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("siteName")} />
    
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
    
          <input type="submit" />
        </form>
      )
    }