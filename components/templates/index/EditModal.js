import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

const EditModal = ({ hideEditModal,id }) => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [teacher,setTeacher] = useState('')
    const updateCourses =async (event)=>{
        event.preventDefault();
        await fetch(`/api/courses/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name,price,teacher,file:"images/courses/js.png"})
        }).then((res)=>console.log(res))   
    }

    return (
        <div className={styles.modal_container} id="edit-modal">
            <div className={styles.modal_bg} onClick={hideEditModal}></div>
            <div className={styles.modal_content}>
                <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
                <form action="#" className={styles.edit_user_form} onSubmit={updateCourses} >
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            type="text" 
                            placeholder="نام دوره"
                            spellcheck="false"
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faCashRegister} /> </span>
                        <input
                            type="text" 
                            placeholder="قیمت دوره"
                            spellCheck="false"
                            value={price}
                            onChange={(event)=>setPrice(event.target.value)}
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text" 
                            placeholder="مدرس دوره"
                            spellcheck="false"
                            value={teacher}
                            onChange={(event)=>setTeacher(event.target.value)}
                        />
                    </div>

                    <button type="submit" className={styles.update_btn }>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditModal
