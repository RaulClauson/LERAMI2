import React, { useEffect, useRef } from 'react';
import './Loading_Ani.css'

const Loading = () => {

    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.play().catch(error => {
          console.error("Erro ao tentar reproduzir o vídeo automaticamente:", error);
        });
      }
    }, []);

    return(
        <div id='Loading'>
            <video
              ref={videoRef}
              autoPlay
              muted
            >
              <source src="/Images/loading/logo.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div></div>
        </div>
    )
}

export default Loading;