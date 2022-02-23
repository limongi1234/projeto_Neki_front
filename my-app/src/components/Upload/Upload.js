import { DropContainer, UploadMessage } from './Styles';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Styles';

export default class Upload extends Component{
    renderDragMessage = (isDragActive, isDragReject) =>{
        if(!isDragActive){
            return <UploadMessage>Arraste a foto aqui...</UploadMessage>
        }
        if (isDragReject){
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage type="sucess">Solte a foto aqui</UploadMessage>
    };
    render(){
        const { onUpload } = this.props;

        return(
            <Dropzone accept = "image/*" onDropAccepted={onUpload}>
            { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                 /* quando o usuario está passando com o mouse por cima dessa zone com um arquivo que é imagem */
                isDragReject={isDragReject}
                /* quando o usuario está tentando anexar um arquivo que não é imagem */
              >
  
                <input {...getInputProps()} />
                {this.renderDragMessage(isDragActive, isDragReject)}                
              </DropContainer>
            )}
  
           </Dropzone>
        );
    }
}