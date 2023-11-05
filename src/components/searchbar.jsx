/* eslint-disable react/prop-types */
import styles from "./SearchBar.module.scss"

export default function SearchBar({ setQuery }) {
  return (
    <form className="my-5 gap-4 mb-5">
        <input 
        onChange={a=>{
            setQuery(a.target.value);
        }}
        placeholder="Type to search characters" className={styles.input} type="text" />
        <button className={`${styles.btn} btn btn-primary p-2`}>Search</button>
    </form>

  )
}

export { SearchBar }