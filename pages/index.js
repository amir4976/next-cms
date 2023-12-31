import Course from "@/components/templates/index/Course";
import courseModule from '@/modules/courses'
import connectToDB from "@/utils/db";

const index = ({courses}) => {

  return <Course data={courses} />;
};

export async function getStaticProps(context){
  connectToDB()
  const courses = await courseModule.find({})
  return{
    props:{
      courses: JSON.parse(JSON.stringify(courses))
    }
    ,revalidate: 60*60*12,
  }
}




export default index;
