import {useState} from 'react';
import { Button } from 'bootstrap';
import Modal from "react-bootstrap/Modal";

export const AddMovie = (props) => {
    //React Hooks
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalInputTitle, setModalInputTitle] = useState('');
    const [modalInputPoster, setModalInputPoster] = useState('');
    const [modalInputRating, setModalInputRating] = useState('');
    const [modalInputDescription, setModalInputDescription] = useState('');
    const [modalInputTrailer, setModalInputTrailer] = useState('');
    //Modal Show On/Off
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        props.onOk({title : modalInputTitle,posterUrl : modalInputPoster,rate : modalInputRating, description : modalInputDescription, trailer : modalInputTrailer});
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //Get data from modal and passed to MovieList as a callback function
    const modalTitleHandler = e => {
        setModalInputTitle(e.target.value)
    };
    const modalPosterHandler = e => {
        setModalInputPoster(e.target.value)
    };
    const modalRatingHandler = e => {
        setModalInputRating(e.target.value)
    };
    const modalDescriptionHandler = e => {
        setModalInputDescription(e.target.value)
    }
    const modalTrailerHandler = e => {
        setModalInputTrailer(e.target.value)
    }

    return (
    <>
        <Button type="danger" onClick={showModal} shape="circle" size='large' style={{marginTop: 25}}>
            <p className='addBtn'>+</p>
        </Button>
        <Modal title="Add Anime" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='pop-up-modal'>
            <label>Anime title :</label>
            <br></br>
            <input type='text' 
                placeholder="anime title..."
                value={modalInputTitle}
                onChange={modalTitleHandler}>
            </input>
            <br></br>
            <label>Anime Poster :</label>
            <br></br>
            <input type='text' 
                placeholder="add a valid url link..."
                value={modalInputPoster}
                onChange={modalPosterHandler}>
            </input>
            <br></br>
            <label>Anime Trailer :</label>
            <br></br>
            <input type='text' 
                placeholder="add a valid emeded link..."
                value={modalInputTrailer}
                onChange={modalTrailerHandler}>
            </input>
            <br></br>
            <label>Anime Rating :</label>
            <br></br>
            <input type='number' 
                placeholder="add a rating from 0 to 5..."
                value={modalInputRating}
                onChange={modalRatingHandler}>
            </input>
            <br></br>
            <label>Description :</label>
            <br></br>
            <textarea type='text'
                placeholder='add your description'
                value={modalInputDescription}
                onChange={modalDescriptionHandler}
                cols='35'
                rows='8'>
            </textarea>
        </Modal>
    </>
    );
}