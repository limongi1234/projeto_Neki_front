import React from 'react';

import { Container, FileInfo, Preview } from './Styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fgatoirado%2Fphotos%2Fvamos-ver-se-algu%25C3%25A9m-acha-o-erro-%2F527612807411429%2F&psig=AOvVaw0Qd2h4rhAW8LAvCPTERLDH&ust=1642015304920000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj1gvW1qvUCFQAAAAAdAAAAABAD" />
                <div>
                    <strong>profile.png</strong>
                    <span>64kb <button onClick={() => {}}>Excluir</button></span>
                </div>
            </FileInfo>

            <div>
                <CircularProgressbar
                styles={{
                    root: { width: 24 },
                    path: { stroke: '#7159c1' }
                }}
                strokeWidth={10}
                percentage={60}
                />

                <a 
                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fgatoirado%2Fphotos%2Fvamos-ver-se-algu%25C3%25A9m-acha-o-erro-%2F527612807411429%2F&psig=AOvVaw0Qd2h4rhAW8LAvCPTERLDH&ust=1642015304920000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj1gvW1qvUCFQAAAAAdAAAAABAD"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <MdLink style={{marginRight: 8 }} size={24} color="#222" />

                </a>

                <MdCheckCircle size={24} color="#78e5d5"/>
                <MdError size={24} color="#e57878" />
                
            </div>
        </li>
    </Container>

);

export default FileList;