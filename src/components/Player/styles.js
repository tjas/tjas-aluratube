//import styled from "styled-components";
import Modal from 'styled-react-modal';

//export const StyledVideoPlayer = styled.div`
export const StyledVideoPlayer = Modal.styled`

    //flex: column;
    padding: 32px;
    iframe {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        //max-width: 210px;
        height: auto;
        border: 1px solid ${({ theme }) => theme.borderBase};
    }

    // .video {
    //     width: 100%;
    // }
    
    .modal {
        background-color: rgba(0, 0, 0, .5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        /* display: block; */
        /* display: none; */
        /* display: ${({ showPlayer }) => showPlayer ? 'block' : 'none'}}; */
        //${({ showPlayer }) => !showPlayer && `display: none;`}
        /* style={{ display: context.show ? 'block' : 'none' }} */
    }

    .modal-content {
        margin: 0 auto;
        margin-top: 3.5%;
        max-width: 1200px;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        //padding: 16px;
        /* box-shadow: 0 0 2px #fff; */
        box-shadow: 0 0 2px ${({ theme }) => theme.backgroundLevel2};
    }

    .modal-header h1 {
        /* font-weight: bold; */
        text-align: center;
        
    }

    //.modal-header, 
    .modal-body {
        padding: 24px;
    }

    .modal-header{
        //padding: 8px 16px;
        background-color: ${({ theme }) => theme.backgroundLevel2};
    }

    .modal-footer{
        background-color: ${({ theme }) => theme.backgroundLevel2};
        padding: 0 24px 24px 24px;
    }
    .modal-close {
        text-align: right;
        border: none;
        /* display: flex;
        justify-content: flex-end;
        align-items: flex-end; 
        align: flex-end;  */
        /* justify-content: ; */
        /* justify-content: space-around; */
    }
    // .modal-close:focus,
    // .modal-close:active,
    // .modal-close button:focus,
    // .modal-close button:active {
    //     text-decoration: none;
    //     outline-color: transparent;
    //     outline-style: none;
    //     box-shadow: none;
    //     border: transparent;
    // }
    .modal-close button {
        //flex: 1;
        cursor: pointer;
        text-decoration: none;
        outline-color: transparent;
        outline-style: none;
        box-shadow: none;
        /* border: none; */
        color: ${({ theme }) => theme.textColorBase};
        font-size: 14px;
        /* background-color: ${({ theme }) => theme.backgroundLevel2}; */
        background-color: rgba(0, 0, 0, 0);
        /* box-shadow: 0 1px 0 rgb(0 0 0 / 10%); */
        /* border: 1px solid ${({ theme }) => theme.borderBase}; */
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        translate: 0 12px;
        //svg {
        //    translate: 0px 3px;
        //}
        /* @media (min-width: 600px) {
            width: 40px;
            height: 40px;
        } */
    }
`;