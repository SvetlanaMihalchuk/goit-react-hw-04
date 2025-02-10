import { useState } from "react"
import css from "./SearchBar.module.css"
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";


const SearchBar = ({onSubmit}) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === ""){
            toast.error("The field must not be empty. Please enter a search query!", {
                position: "top-center",
                duration: 4000,
            });
            return;
        }
        onSubmit(value);
        e.target.reset();
        setValue("");
    }
  return (
      <header className={css.header}>
          <form className={css.form} onSubmit={handleSubmit}> 
                <input className={css.input}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
              <button type="submit">
                  <IoMdSearch className={css.icon} size="20"/>
              </button>
          </form>
      </header>
  )
}

export default SearchBar