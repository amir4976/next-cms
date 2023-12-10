import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course =({data}) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [Data,setData]=useState(data)
  const hideAddCourseModal = () => setShowAddCourseModal(false);

  // for realtime
  const getCourses =async ()=>{
    const res = await fetch('/api/courses')
    const AllCourses =await res.json() 
    console.log(AllCourses)
      if(res.status === 200){
        setData(AllCourses)
      }
  }
   

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {
            Data.map((course)=>(
              <CoursesItem  title={course.name} image={course.file} {...course} GetFunc={getCourses} />
              
            ))
          }
        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal} GetFunc={getCourses} />
      )}
    </>
  );
};

export default Course;
