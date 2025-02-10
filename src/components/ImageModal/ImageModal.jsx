import Modal from 'react-modal'
import css from "./ImgeModal.module.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const ImageModal = ({isOpen, onClose, item}) => {
  if (!item) return null;
    return (
      <div>
        <Modal className={css.modal}
          overlayClassName={css.overlay}
              isOpen={isOpen}
                onRequestClose={onClose}
                style={customStyles}
          >
          <img
              className={css.image}
              src={item.urls.regular}
              alt={item.description}
          />
          </Modal>
    </div>
  )
}

export default ImageModal