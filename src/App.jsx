import { useEffect, useState } from 'react'
import './App.css'
import { fetchPictures } from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (item) => {
    setSelectedImage(item);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
      const allImages = await fetchPictures(query, page, perPage);
      setPictures(prev => [...prev, ...allImages]);
      }
      catch { 
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);
  
  const handleSetQuery = newQuery => {
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
    
  }


  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />
      {pictures.length > 0 && <ImageGallery pictures={pictures} onImageClick={openModal} />}
      {isLoading && <Loader/>}
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && !isLoading && (<LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />)}
    <ImageModal isOpen={modalIsOpen} onClose={closeModal} item={selectedImage}/>
    </>
  );
  }

export default App
