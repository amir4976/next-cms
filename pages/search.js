import { useState } from 'react'
import connectToDB from '@/utils/db'
import React from 'react'
import courseModel from '@/modules/courses'
import CoursesItem from '@/components/modules/coursesItem/CoursesItem'
import styles from "@/styles/Course.module.css";
function search({result}) {

    

  return (
    <div>

        <ul className={styles.courses_list}>

            {result.map((course)=>(
                <CoursesItem title={course.name}  {...course}  />
                ))} 
        
        </ul>

    </div>
  )
}

export async function  getServerSideProps(context){
    connectToDB()
    const {query} = context
    const res = await courseModel.find({name:{$regex:query.q}})
    const result = JSON.parse(JSON.stringify(res))

    return{
        props:{
            result:result   
        }
    }
}

export default search;