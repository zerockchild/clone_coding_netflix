import Modal from 'react-modal';
import {useEffect, useState} from "react";
import {ModalContainer} from "./style/ModalMovieDetailsStyle";
import Header from "../Header/Header";

function ModalMovieDetails(props) {
    const modalIsClose = () => {
        props.isClose(false)
    }
    return(
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
                    zIndex:10000
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#141414',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    width:'50vw',
                    margin:'0 auto'
                }
        }}>
            <Header/>
        </Modal>
        </ModalContainer>
    )
}
export default ModalMovieDetails;