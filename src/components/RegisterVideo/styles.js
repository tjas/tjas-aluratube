import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
    .add-video {
        width: 50px;
        height: 50px;
        font-size: 20px;
        color: inherit;
        position: fixed;
        bottom: 16px;
        right: 16px;
        border: 0;
        background-color: red;
        border-radius: 50%;
        z-index: 10;
        cursor: pointer;
    }
    .modal-header {
        margin-bottom: 32px;
    }
    .modal-title {
        position: absolute;
        top: 28px;
        right: 375px;
    }
    .modal-close button {
        //width: 25px;
        //height: 25px;
        position: absolute;
        top: 18px;
        right: 16px;
        //color: inherit;
        //background-color: transparent;
        //border: none;
        //cursor: pointer;

        flex: 1;
        cursor: pointer;
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
        //translate: 0 24px;
        /* svg {
            translate: 0px 3px;
        } */
    }
    button[type="submit"] {
        background-color: red;
        padding: 12px 12px;
        border: none;
        //border-radius: 2px;
        cursor: pointer;
        color: white;
        margin-top: 8px;      
    }
    form {
        width: 100%;
        padding: 5%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0; bottom: 0;
        left: 0; right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        & > div {
            flex: 1;
            height: fit-content;
            //border-radius: 8px;
            max-width: 520px;
            background-color: ${({ theme }) => theme.backgroundLevel2};
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 24px;
            padding-top: 40px;
        }
    }
    input {
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.borderBase};
        padding: 12px 12px;
        margin-bottom: 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
    }
    .preview {
        display: flex;
		flex-direction: column;
        .thumb-preview {
            margin-top: 24px;
            aspect-ratio: 16/9;
            font-weight: 500;
            object-fit: cover;
            width: 100%;
            //max-width: 210px;
            height: auto;
            border: 1px solid ${({ theme }) => theme.borderBase};
        }
        .title-preview {
            padding-top: 8px;
            font-size: 18px;
            color: ${({ theme }) => theme.textColorBase};
            font-weight: 900;
        }
        .author-preview {
            padding-top: 6px;
            font-size: 14px;
            color: ${({ theme }) => theme.textColorLevel1};
            
        }
        .provider-preview {
            padding-top: 6px;
            font-size: 10px;
            color: ${({ theme }) => theme.textColorLevel2};

        }
    }
`;