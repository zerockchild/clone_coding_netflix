import Modal from 'react-modal';
import {ModalContainer, VideoView} from "./style/ModalMovieDetailsStyle";
import Header from "./Header";

function ModalMovieDetails(props) {
    const modalIsClose = () => {
        props.isClose(false)
    }
    return (
        <ModalContainer>
            <Modal isOpen={props.isOpen}
                   onRequestClose={modalIsClose}
                   ariaHideApp={false}
                   style={{
                       overlay: {
                           position: 'fixed',
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           backgroundColor: 'rgba(0, 0, 0, 0.25)',
                           zIndex: 10000
                       },
                       content: {
                           position: 'absolute',
                           top: '40px',
                           left: '40px',
                           right: '40px',
                           bottom: '40px',
                           border: '0px',
                           background: '#141414',
                           overflow: 'auto',
                           WebkitOverflowScrolling: 'touch',
                           borderRadius: '4px',
                           outline: 'none',
                           padding: '0px',
                           width: '900px',
                           height: '91%',
                           margin: '0 auto'
                       }
                   }}>
                <VideoView>
                    <Header currentMovie={props.currentMovie} currentCategory={props.currentCategory}/>
                </VideoView>
            </Modal>
        </ModalContainer>
    )
}

export default ModalMovieDetails;