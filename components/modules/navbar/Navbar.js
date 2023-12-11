import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";
import { redirect } from "next/navigation";
import { Router, useRouter } from "next/router";

const Navbar = () => {
  const [search,setSearch] = useState("")
  const route = useRouter()
  const SearchingData = async (data)=>{
    route.push(`/search?q=${search}`)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input
          type="text"
          placeholder="جستجو کنید...."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onKeyDown={(e)=>e.key==="Enter" && SearchingData(e.target.value)}
        />
        <span className={styles.navbar_search_icon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div className={styles.navbar_user_avatar}>
        <img src="/images/avatar/avatar.png" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
